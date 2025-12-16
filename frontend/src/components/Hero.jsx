import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-dark-bg text-white min-h-[80vh] flex items-center">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Weave <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ageless</span> Beauty.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg">
              Discover unparalleled craftsmanship in every knot. Authentic, hand-knotted carpets that transform spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/carpets"
                className="group relative px-8 py-4 bg-accent-blue rounded-full font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10 text-white group-hover:text-white transition">Browse Collection</span>
                <div className="absolute inset-0 h-full w-full bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-gray-600 rounded-full font-bold text-lg text-gray-300 hover:border-white hover:text-white transition duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl transform rotate-6 scale-95" />
            <div className="relative bg-dark-surface rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-2">
              {/* Placeholder for a hero image if available, using a pattern for now */}
              <div className="h-[400px] w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-6xl">🧶</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
