import React from 'react';

const OrderConfirmationPage = () => {
  const order = {};

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
