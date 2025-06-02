const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');

router.post('/', async (req, res) => {
  try {
    const { userId, productName, purchaseDate, warrantyPeriod } = req.body;
    const purchase = new Purchase({
      userId,
      productName,
      purchaseDate,
      warrantyPeriod,
    });
    await purchase.save();
    res.status(201).json(purchase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const purchases = await Purchase.find({ userId: req.params.userId });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;