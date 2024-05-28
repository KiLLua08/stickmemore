// src/pages/OrderConfirmationPage.js
import React from 'react';

const OrderConfirmationPage = () => {
  // This should come from order submission response
  const order = {}; // Placeholder

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your purchase!</p>
      <p>Order Number: {order.orderNumber}</p>
      <p>Estimated Delivery Date: {order.deliveryDate}</p>
    </div>
  );
};

export default OrderConfirmationPage;
