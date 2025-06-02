const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const existingUser = await User.findOne({ userId: phone });
    if (existingUser) {
      return res.status(400).json({ message: 'Phone number already in use' });
    }
    const user = new User({
      userId: phone, // Set userId to phone number
      name,
      email,
      phone,
      address,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;