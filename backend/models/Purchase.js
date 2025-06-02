const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: 'User' },
  productName: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  warrantyPeriod: { type: Number, required: true }, // in months
  warrantyStatus: {
    type: String,
    enum: ['Active', 'Expired'],
    default: 'Active',
  },
});

purchaseSchema.pre('save', function (next) {
  const currentDate = new Date();
  const expiryDate = new Date(this.purchaseDate);
  expiryDate.setMonth(expiryDate.getMonth() + this.warrantyPeriod);
  this.warrantyStatus = currentDate <= expiryDate ? 'Active' : 'Expired';
  next();
});

module.exports = mongoose.model('Purchase', purchaseSchema);