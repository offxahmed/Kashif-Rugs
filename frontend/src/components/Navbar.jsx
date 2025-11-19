import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600">
            Kashif Rugs
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link 
              to="/" 
              className={`text-base lg:text-lg transition ${
                isActive('/') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/carpets" 
              className={`text-base lg:text-lg transition ${
                isActive('/carpets') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Carpets
            </Link>
            <Link 
              to="/about" 
              className={`text-base lg:text-lg transition ${
                isActive('/about') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-base lg:text-lg transition ${
                isActive('/contact') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="relative text-base lg:text-lg transition text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
            <Link 
              to="/admin" 
              className={`text-base lg:text-lg transition ${
                isActive('/admin') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link 
              to="/cart" 
              className="relative text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-base transition ${
                  isActive('/') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/carpets" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-base transition ${
                  isActive('/carpets') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Carpets
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-base transition ${
                  isActive('/about') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-base transition ${
                  isActive('/contact') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/admin" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-base transition ${
                  isActive('/admin') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
