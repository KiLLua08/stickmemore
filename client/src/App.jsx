import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Layout from './Layout';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './App.css'

const App = () => {
  const stripePromise = loadStripe('your-publishable-key-here');
  return (
        <Elements stripe={stripePromise}>
          <Router>
            <Layout />
          </Router>
        </Elements>
  );
};

export default App;
