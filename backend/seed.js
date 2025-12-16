
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Carpet from './models/Carpet.js';

dotenv.config();

const sampleCarpets = [
  {
    title: "Royal Persian Silk Rug",
    price: 1200,
    description: "Hand-knotted pure silk rug from Qom, featuring intricate floral patterns and a high knot density. A masterpiece of traditional craftsmanship that adds elegance to any room.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.04 PM.jpeg"
  },
  {
    title: "Antique Tribal Baluchi",
    price: 450,
    description: "Authentic tribal Baluchi rug with deep red and indigo tones. Hand-woven with wool on wool foundation, featuring geometric motifs symbolic of nomadic heritage.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.05 PM.jpeg"
  },
  {
    title: "Modern Abstract Wool Rug",
    price: 850,
    description: "Contemporary design meets traditional comfort. This hand-tufted wool rug features an abstract color palette suitable for modern living spaces and offices.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.06 PM.jpeg"
  },
  {
    title: "Classic Kashan Medallion",
    price: 1500,
    description: "A timeless classic Kashan rug featuring a central medallion with curved curvilinear motifs. Made with high-quality Kork wool, perfect for formal living areas.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.08 PM.jpeg"
  },
  {
    title: "Vintage Turkish Oushak",
    price: 2200,
    description: "Soft, muted colors and a large-scale design characterize this vintage Oushak. Its plush pile and unique angora wool blend offer luxurious comfort.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.09 PM.jpeg"
  },
  {
    title: "Heriz Serapi Dining Rug",
    price: 3500,
    description: "Durable and majestic, this Heriz rug features bold geometric patterns and vibrant copper and navy hues. Ideal for high-traffic areas like dining rooms.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.10 PM.jpeg"
  },
  {
    title: "Kazak Geometric Runner",
    price: 600,
    description: "Bright and bold Caucasian Kazak runner. Features three central medallions and sharp geometric borders. Perfect for hallways or entryways.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.11 PM.jpeg"
  },
  {
    title: "Minimalist Scandinavian Flatweave",
    price: 350,
    description: "Lightweight and reversible flatweave kilim. Features simple stripes and neutral grey and cream tones, embodying Scandinavian minimalism.",
    imageUrl: "/uploads/WhatsApp Image 2025-10-06 at 11.05.12 PM.jpeg"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB for seeding');

    // Clears existing data to avoid duplicates (Optional: comment out if you want to keep existing)
    await Carpet.deleteMany({});
    console.log('🗑️  Cleared existing carpets');

    await Carpet.insertMany(sampleCarpets);
    console.log(`🌱 Successfully seeded ${sampleCarpets.length} sample carpets!`);

    mongoose.connection.close();
    console.log('👋 Connection closed');
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();
