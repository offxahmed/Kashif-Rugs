import { motion } from 'framer-motion';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-dark-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            About Kashif Rugs
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Crafting <span className="text-white font-semibold">Timeless Beauty</span>, One Knot at a Time.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-dark-surface border border-white/5 rounded-2xl shadow-xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

          <h2 className="text-3xl font-bold text-white mb-8 relative z-10">Our Story</h2>
          <div className="prose prose-lg prose-invert max-w-none text-gray-400 space-y-6 relative z-10">
            <p>
              Welcome to <span className="text-accent-blue font-semibold">Kashif Rugs</span>, where tradition meets artistry. For generations, we have been
              dedicated to creating exquisite hand-knotted carpets that tell stories of craftsmanship,
              culture, and timeless elegance.
            </p>
            <p>
              Our journey began with a passion for preserving the ancient art of hand-knotting,
              a technique passed down through centuries. Each carpet in our collection is a testament
              to the skill and dedication of our master artisans, who pour their heart and soul into
              every single knot.
            </p>
            <p>
              We believe that a hand-knotted carpet is more than just a floor covering—it's a work of
              art that transforms your living space, adding warmth, character, and a touch of luxury
              that lasts for generations.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: "🎨", title: "Artisan Craftsmanship", desc: "Every carpet is meticulously handcrafted by skilled artisans using traditional techniques" },
            { icon: "✨", title: "Premium Quality", desc: "We use only the finest materials—premium wool and silk—ensuring durability and beauty" },
            { icon: "❤️", title: "Heritage & Tradition", desc: "Preserving centuries-old techniques while creating designs that fit modern lifestyles" }
          ].map((val, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-dark-surface border border-white/5 rounded-xl shadow-lg p-8 text-center hover:border-accent-blue/30 transition-colors duration-300 group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{val.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">{val.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-dark-surface border border-white/5 rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Craftsmanship Process</h2>
          <div className="space-y-12 relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-800 hidden md:block" />

            {[
              { title: "Design Selection", desc: "We carefully select and create designs that blend traditional patterns with contemporary aesthetics" },
              { title: "Material Preparation", desc: "Premium wool and silk are carefully prepared, dyed with natural colors, and readied for weaving" },
              { title: "Hand-Knotting", desc: "Master artisans hand-knot each carpet, tying thousands of knots with precision and care" },
              { title: "Finishing Touches", desc: "Each carpet is carefully trimmed, washed, and inspected to ensure the highest quality standards" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start md:pl-12 relative"
              >
                <div className="hidden md:flex absolute left-0 top-0 w-8 h-8 bg-accent-blue rounded-full items-center justify-center font-bold text-white z-10 shadow-lg border-4 border-dark-surface">
                  {index + 1}
                </div>
                <div className="flex-shrink-0 w-8 h-8 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold mr-4 md:hidden">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl shadow-2xl p-10 text-white text-center border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-blue-100 max-w-3xl mx-auto">
            To bring the beauty and elegance of hand-knotted carpets into homes around the world,
            while preserving the rich heritage of this ancient craft. We are committed to providing
            our customers with exceptional quality, timeless designs, and a piece of art that will
            be cherished for generations to come.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

