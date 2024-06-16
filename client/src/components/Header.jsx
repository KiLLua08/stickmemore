import React from 'react';
import { Link } from 'react-router-dom';
import sticker from '../assets/sticker.png';

function Header() {
  return (
    <nav className="flex flex-col font-bold md:flex-row justify-between items-center bg-slate-900 p-4 md:px-8 shadow-lg font-roboto gap-20">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={sticker} alt="logo" className="w-16 h-16 rounded-full" />
        <span className="text-2xl text-white ml-4 font-semibold">StickMeMore</span>
      </div>
      <div className="flex-1 flex justify-center mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row items-center gap-5">
          <li className="cursor-pointer text-red-100 hover:text-white transition duration-300">
            <Link to="/">Welcome</Link>
          </li>
          <li className="cursor-pointer text-red-100 hover:text-white transition duration-300">
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer text-red-100 hover:text-white transition duration-300">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center bg-slate-100 p-2 rounded-full mb-4 md:mb-0 w-full md:w-auto">
        <button type="submit" className="text-gray-400">
          <span className="material-symbols-outlined">search</span>
        </button>
        <input
          type="search"
          placeholder="Search..."
          className="ml-2 bg-slate-100 focus:outline-none w-full md:w-auto"
        />
      </div>
      <div className="flex items-center gap-5">
        <Link
          className="cursor-pointer text-red-100 hover:text-white transition duration-300"
          to="/register"
        >
          Register
        </Link>
        <div className="h-6 border-l border-red-100"></div>
        <Link
          className="cursor-pointer text-red-100 hover:text-white transition duration-300"
          to="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header;
