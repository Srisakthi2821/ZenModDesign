import axios from 'axios';
import { useState } from 'react';

const PurchaseForm = ({ userId, onPurchaseCreated }) => {
  const [formData, setFormData] = useState({
    userId,
    productName: '',
    purchaseDate: '',
    warrantyPeriod: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://zenmodapi.onrender.com/api/purchases', formData);
      setMessage('Purchase created successfully!');
      console.log('Purchase created:', res.data);
      setFormData({ ...formData, productName: '', purchaseDate: '', warrantyPeriod: '' });
      onPurchaseCreated();
    } catch (err) {
      setMessage('Error creating purchase: ' + err.message);
      console.error(err);
    }
  };

  return (
    <div className="login-form">
      <h3 className="text-shine login-title">Add Purchase</h3>
      <p>Customer Key: {userId}</p> {/* Display userId (phone number) */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          className="input-field input-placeholder"
          value={formData.productName}
          onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
        />
        <input
          type="date"
          className="input-field date-input"
          value={formData.purchaseDate}
          onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
        />
        <input
          type="number"
          placeholder="Warranty Period (months)"
          className="input-field input-placeholder"
          value={formData.warrantyPeriod}
          onChange={(e) => setFormData({ ...formData, warrantyPeriod: e.target.value })}
        />
        <button type="submit" className="login-button">
          Create Purchase
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PurchaseForm;