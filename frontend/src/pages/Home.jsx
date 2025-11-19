import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🧵</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Handcrafted Quality
              </h3>
              <p className="text-gray-600">
                Each carpet is meticulously hand-knotted by skilled artisans
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Timeless Designs
              </h3>
              <p className="text-gray-600">
                Traditional patterns meet contemporary aesthetics
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Premium Materials
              </h3>
              <p className="text-gray-600">
                Only the finest wool and silk for lasting beauty
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/carpets"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200"
            >
              View Our Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
