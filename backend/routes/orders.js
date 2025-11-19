import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// GET all orders (for admin)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('items.carpet')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.carpet');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new order
router.post('/', async (req, res) => {
  try {
    const { customerName, email, phone, address, items, totalAmount, notes } = req.body;

    // Validate required fields
    if (!customerName || !email || !phone || !address || !items || items.length === 0 || !totalAmount) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const order = new Order({
      customerName,
      email,
      phone,
      address,
      items,
      totalAmount,
      notes: notes || ''
    });

    const savedOrder = await order.save();
    const populatedOrder = await Order.findById(savedOrder._id)
      .populate('items.carpet');

    res.status(201).json(populatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update order status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true, runValidators: true }
    ).populate('items.carpet');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order deleted successfully', order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
