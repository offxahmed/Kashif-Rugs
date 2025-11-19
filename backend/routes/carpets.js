import express from 'express';
import multer from 'multer';
import path from 'path';
import Carpet from '../models/Carpet.js';

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
  }
});

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

    const imageUrl = `/uploads/${req.file.filename}`;

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
      updateData.imageUrl = `/uploads/${req.file.filename}`;
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
