import express from 'express';
import multer from 'multer';
import Carpet from '../models/Carpet.js';
import { storage } from '../config/cloudinary.js';

const router = express.Router();

const upload = multer({ storage });


// GET all carpets
router.get('/', async (req, res) => {
  try {
    const carpets = await Carpet.find().sort({ createdAt: -1 });
    res.json(carpets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single carpet
router.get('/:id', async (req, res) => {
  try {
    const carpet = await Carpet.findById(req.params.id);
    if (!carpet) {
      return res.status(404).json({ message: 'Carpet not found' });
    }
    res.json(carpet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new carpet
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, price, description } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const imageUrl = req.file.path;

    const carpet = new Carpet({
      title,
      price,
      description,
      imageUrl
    });

    const savedCarpet = await carpet.save();
    res.status(201).json(savedCarpet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update carpet
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const updateData = { title, price, description };

    if (req.file) {
      updateData.imageUrl = req.file.path;
    }

    const carpet = await Carpet.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!carpet) {
      return res.status(404).json({ message: 'Carpet not found' });
    }

    res.json(carpet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE carpet
router.delete('/:id', async (req, res) => {
  try {
    const carpet = await Carpet.findByIdAndDelete(req.params.id);
    
    if (!carpet) {
      return res.status(404).json({ message: 'Carpet not found' });
    }

    res.json({ message: 'Carpet deleted successfully', carpet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
