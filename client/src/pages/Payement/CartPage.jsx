// src/pages/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // This should come from a context or global state
  const cartItems = []; // Placeholder

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item._id}>
            <img src={item.imageUrl} alt={item.name} width="100" />
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice}</h2>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;
