import React from 'react';
import { Link } from 'react-router-dom';
import fb from '/facebook.png';
import gamer from '/gamer.png';
import gmail from '/gmail.png';
import instagram from '/instagram.png';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-2xl font-bold mb-2">StickMeMore</Link>
          <p className="text-sm">© 2024 StickMeMore. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-semibold">Contact Us</span>
          <span>Phone: 94293069</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to="/home" className="hover:text-gray-300 hover:underline">Home</Link>
            <Link to="/shop" className="hover:text-gray-300 hover:underline">Shop</Link>
            <Link to="/about" className="hover:text-gray-300 hover:underline">About</Link>
            <Link to="/contact" className="hover:text-gray-300 hover:underline">Contact</Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="facebook" className="w-10 h-10" />
            </a>
            <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
              <img src={gamer} alt="gamer" className="w-10 h-10" />
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
              <img src={gmail} alt="gmail" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/stick_me_more/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
