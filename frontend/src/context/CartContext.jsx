import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('kashifRugsCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kashifRugsCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (carpet) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === carpet._id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === carpet._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...carpet, quantity: 1 }];
    });
  };

  const removeFromCart = (carpetId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== carpetId));
  };

  const updateQuantity = (carpetId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(carpetId);
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === carpetId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

