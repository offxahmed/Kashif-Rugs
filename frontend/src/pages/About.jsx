export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Kashif Rugs</h1>
          <p className="text-xl text-gray-600">
            Crafting Timeless Beauty, One Knot at a Time
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Welcome to Kashif Rugs, where tradition meets artistry. For generations, we have been 
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
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Artisan Craftsmanship</h3>
            <p className="text-gray-600">
              Every carpet is meticulously handcrafted by skilled artisans using traditional techniques
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              We use only the finest materials—premium wool and silk—ensuring durability and beauty
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Heritage & Tradition</h3>
            <p className="text-gray-600">
              Preserving centuries-old techniques while creating designs that fit modern lifestyles
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Craftsmanship Process</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Selection</h3>
                <p className="text-gray-600">
                  We carefully select and create designs that blend traditional patterns with contemporary aesthetics
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Material Preparation</h3>
                <p className="text-gray-600">
                  Premium wool and silk are carefully prepared, dyed with natural colors, and readied for weaving
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hand-Knotting</h3>
                <p className="text-gray-600">
                  Master artisans hand-knot each carpet, tying thousands of knots with precision and care
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Finishing Touches</h3>
                <p className="text-gray-600">
                  Each carpet is carefully trimmed, washed, and inspected to ensure the highest quality standards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To bring the beauty and elegance of hand-knotted carpets into homes around the world, 
            while preserving the rich heritage of this ancient craft. We are committed to providing 
            our customers with exceptional quality, timeless designs, and a piece of art that will 
            be cherished for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}

