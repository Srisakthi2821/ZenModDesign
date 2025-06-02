import axios from 'axios';
import { useState } from 'react';

const UserForm = ({ setUserId, onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone) {
      setError('Phone number is required (used as Customer Key).');
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      setError('Phone number must be 10 digits.');
      return;
    }

    try {
      const res = await axios.post('https://zenmodapi.onrender.com/api/users', formData);
      console.log('User created:', res.data);
      if (!res.data.userId) {
        setError('Failed to retrieve userId from server.');
        return;
      }
      setUserId(res.data.userId); // Should now be the phone number
      setMessage('User created successfully!');
      setFormData({ name: '', email: '', phone: '', address: '' });
      onUserCreated();
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      setError('Error creating user: ' + errorMessage);
      console.error('Error details:', err.response || err);
    }
  };

  return (
    <div className="login-form">
      <h3 className="text-shine login-title">User Entry</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="input-field input-placeholder"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field input-placeholder"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone (e.g., 1234567890)"
          className="input-field input-placeholder"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <textarea
          placeholder="Address"
          className="input-field input-placeholder"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <button type="submit" className="login-button">
          Create User
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default UserForm;