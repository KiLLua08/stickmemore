import express from 'express';
import stripe from '../config/stripe.js';

const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

export default router;
