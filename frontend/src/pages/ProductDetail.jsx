import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCarpetById } from '../services/carpetService';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [carpet, setCarpet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchCarpet();
  }, [id]);

  const fetchCarpet = async () => {
    try {
      setLoading(true);
      const data = await getCarpetById(id);
      setCarpet(data);
    } catch (err) {
      setError('Failed to load carpet details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(carpet);
    }
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading carpet details...</div>
      </div>
    );
  }

  if (error || !carpet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-red-600 mb-4">{error || 'Carpet not found'}</div>
          <Link to="/carpets" className="text-blue-600 hover:underline">
            Back to Carpets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/carpets"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to Collection
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={`http://localhost:5000${carpet.imageUrl}`}
                alt={carpet.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {carpet.title}
                </h1>
                <p className="text-3xl font-semibold text-blue-600 mb-6">
                  ${carpet.price.toLocaleString()}
                </p>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {carpet.description}
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <label className="text-gray-700 font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-x py-2"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

