import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Welcome from './pages/Welcome';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';

import Stickers from './pages/Stickers/Stickers'
import StickerDetailsPage from './pages/Stickers/StickerDetails';
import CartPage from './pages/Payement/CartPage';
import CheckoutPage from './pages/Payement/CheckoutPage';
import OrderConfirmationPage from './pages/Payement/OrderConfirmationPage';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-blue-100">
    <Router>
      <Header />
      <div className="flex-grow flex justify-center items-center py-20">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          /*  */
          <Route path="/stickers" exact element={<Stickers />} />
          <Route path="/stickers/:id" element={<StickerDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          /*  */
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
  );
}

export default Layout;
