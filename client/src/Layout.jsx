import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

import Stickers from './pages/Stickers/Stickers';
import StickerDetailsPage from './pages/Stickers/StickerDetails';
import CartPage from './pages/Payement/CartPage';
import CheckoutPage from './pages/Payement/CheckoutPage';
import OrderConfirmationPage from './pages/Payement/OrderConfirmationPage';
import ProtectedRoute from './utils/ProtectedRoute';
import PaymentPage from './pages/PaymentPage';

function Layout() {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register'];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-blue-100">
      <Header />
      <div className="flex-grow flex justify-center items-center py-10">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stickers" exact element={<Stickers />} />
          <Route path="/stickers/:id" element={<StickerDetailsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default Layout;
