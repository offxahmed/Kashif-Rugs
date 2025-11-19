import mongoose from 'mongoose';

const carpetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  imageUrl: {
    type: String,
    required: [true, 'Image is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Carpet', carpetSchema);