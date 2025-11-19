import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kashif Rugs
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            Premium Hand-Knotted Carpets
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover exquisite handcrafted carpets that blend traditional artistry 
            with timeless elegance. Each piece is meticulously woven to perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/carpets"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-200"
            >
              Browse Collection
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
