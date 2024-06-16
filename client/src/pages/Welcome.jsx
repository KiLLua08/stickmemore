import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/shop.png';

function Welcome() {
  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen text-rose-950 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='text-center p-5 bg-white rounded-xl'>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to StickMeMore</h1>
        <p className="text-lg md:text-2xl mb-8">Discover unique and custom stickers for every occasion.</p>
        <Link to="/shop" className="px-6 py-3 bg-red-500 text-white rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">Shop Now</Link>
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
      <section className="testimonials py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="testimonial-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/3">
              <p className="mb-4">"Amazing quality and fantastic service. Will definitely order again!"</p>
              <h3 className="text-xl font-semibold">* Rayen Yakoubi</h3>
            </div>
            <div className="testimonial-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/3">
              <p className="mb-4">"Love the custom designs! They were exactly what I wanted."</p>
              <h3 className="text-xl font-semibold">* Raslen Yakoubi</h3>
            </div>
            <div className="testimonial-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/3">
              <p className="mb-4">"Fast shipping and great customer service. Highly recommend!"</p>
              <h3 className="text-xl font-semibold">* Med Ramez Yakoubi</h3>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals/Best Sellers */}
      <section className="new-arrivals py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Add sticker components or placeholder items */}
            <div className="sticker-box p-6 bg-white shadow-lg rounded-lg w-full md:w-1/4 flex justify-center items-center">
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

      {/* Newsletter Signup */}
      <section className="newsletter py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
          <p className="mb-8">Sign up for our newsletter to get the latest news and exclusive offers.</p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input type="email" placeholder="Enter your email" className="p-2 w-full md:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500" />
            <button type="submit" className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
