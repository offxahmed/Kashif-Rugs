import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-6">Your Cart</h1>
          <div className="glass rounded-xl p-12 border border-white/10">
            <p className="text-xl text-gray-400 mb-8">Your cart is empty. Start your journey.</p>
            <Link
              to="/carpets"
              className="inline-block bg-accent-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/40 transition-all duration-300"
            >
              Browse Carpets
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                  layout
                  className="bg-dark-surface border border-white/5 rounded-xl p-6 flex flex-col sm:flex-row gap-6 shadow-lg hover:border-white/20 transition-colors duration-200"
                >
                  <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                    <img
                      src={`http://localhost:5000${item.imageUrl}`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xl font-bold text-accent-blue">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-gray-400 mb-4 font-mono text-sm">${item.price.toLocaleString()} each</p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-black/30 rounded-lg p-1 border border-white/10">
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-white/10 rounded-md text-white transition"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 text-white font-mono">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-white/10 rounded-md text-white transition"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-400 hover:text-red-300 hover:underline text-sm font-medium transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark-surface border border-white/10 rounded-xl p-6 sticky top-24 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="text-white">${getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-400 text-sm">Free</span>
                </div>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex justify-between text-2xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-accent-blue">${getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-white text-dark-bg py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-200 transition mb-4 shadow-lg transform active:scale-95 duration-100"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/carpets"
                className="block text-center text-gray-400 hover:text-white transition hover:underline"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

