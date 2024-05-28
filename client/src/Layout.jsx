import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
    <Router>
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
  );
}

export default Layout;
