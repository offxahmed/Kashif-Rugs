import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-dark-surface border border-white/5 rounded-2xl p-8 hover:border-accent-blue/50 transition-colors duration-300 shadow-xl group"
  >
    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default function Home() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Hero />

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">
              Why Choose Kashif Rugs?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our commitment to quality ensures that every piece is not just a rug, but a legacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <FeatureCard
              icon="🧵"
              title="Handcrafted Quality"
              desc="Each carpet is meticulously hand-knotted by skilled artisans, taking months to complete a single masterpiece."
              delay={0.1}
            />
            <FeatureCard
              icon="🎨"
              title="Timeless Designs"
              desc="From ancient Persian motifs to modern abstract art, our collection bridges the gap between history and contemporary style."
              delay={0.2}
            />
            <FeatureCard
              icon="✨"
              title="Premium Materials"
              desc="Sourced from the finest wool, silk, and cotton. Our rugs are built to withstand generations while maintaining their luster."
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 inline-block">
              <div className="bg-dark-surface rounded-xl px-12 py-12">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to find your perfect match?</h3>
                <Link
                  to="/carpets"
                  className="inline-block bg-white text-dark-bg px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-200 transform hover:-translate-y-1 shadow-2xl"
                >
                  View Our Collection
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
