import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/shop.png';
import Reviews from '../components/Reviews';
import Feedbacks from '../components/Feedbacks';

function Welcome() {
  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen text-cyan-950 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='text-center p-5 bg-white rounded-xl'>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to StickMeMore</h1>
        <p className="text-lg md:text-2xl mb-8">Discover unique and custom stickers for every occasion.</p>
        <Link to="/shop" className="px-6 py-3 bg-blue-800 text-white rounded-full text-lg font-semibold hover:bg-blue-900 transition duration-300">Shop Now</Link>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="features py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">High Quality</h3>
              <p>Our stickers are made from the highest quality materials, ensuring durability and vibrant colors.</p>
            </div>
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Custom Designs</h3>
              <p>We offer custom design options to make your stickers truly unique.</p>
            </div>
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Fast Shipping</h3>
              <p>Get your stickers delivered quickly with our fast and reliable shipping options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Reviews />
      {/* Best Sellers */}
      <section className="new-arrivals py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our best clients</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Add sticker components or placeholder items */}
            <div className="sticker-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/4">
              <img src="https://via.placeholder.com/150" alt="Sticker" className="mb-4 rounded " />
              <h3 className="text-xl font-semibold">Sticker Name</h3>
            </div>
            <div className="sticker-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/4">
              <img src="https://via.placeholder.com/150" alt="Sticker" className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">Sticker Name</h3>
            </div>
            <div className="sticker-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/4">
              <img src="https://via.placeholder.com/150" alt="Sticker" className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">Sticker Name</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Any comment ? */}
      <Feedbacks /> 
    </div>
  );
}

export default Welcome;
