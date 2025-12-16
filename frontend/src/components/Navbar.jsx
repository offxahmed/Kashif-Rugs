import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass sticky top-0 z-50 border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Kashif Rugs
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['/', '/carpets', '/about', '/contact', '/admin'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`relative text-sm font-medium transition-colors duration-200 ${isActive(path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                {isActive(path) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-blue"
                  />
                )}
              </Link>
            ))}

            <Link
              to="/cart"
              className="relative text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-dark-border py-4"
          >
            <div className="flex flex-col space-y-3">
              {['/', '/carpets', '/about', '/contact', '/admin'].map((path) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 text-base transition rounded-lg ${isActive(path)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
