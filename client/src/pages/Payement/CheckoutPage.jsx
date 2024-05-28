// src/pages/CheckoutPage.js
import React, { useState } from 'react';

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    paymentMethod: 'credit_card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
