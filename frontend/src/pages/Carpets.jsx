import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCarpets } from '../services/carpetService';
import { useCart } from '../context/CartContext';

export default function Carpets() {
  const [carpets, setCarpets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchCarpets();
  }, []);

  const fetchCarpets = async () => {
    try {
      setLoading(true);
      const data = await getAllCarpets();
      setCarpets(data);
    } catch (err) {
      setError('Failed to load carpets');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickAdd = (e, carpet) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(carpet);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading carpets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Carpet Collection
        </h1>

        {carpets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No carpets available yet. Add some from the Admin panel!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpets.map(carpet => (
              <Link
                key={carpet._id}
                to={`/carpets/${carpet._id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-200 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`http://localhost:5000${carpet.imageUrl}`}
                    alt={carpet.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {carpet.title}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-3">
                    ${carpet.price.toLocaleString()}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {carpet.description}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => handleQuickAdd(e, carpet)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Quick Add
                    </button>
                    <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
