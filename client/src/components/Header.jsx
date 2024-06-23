import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import sticker from '../assets/sticker.png';
import { useLocation } from 'react-router-dom';
import { logout } from '../Redux/user/userSlice.js';
import { GrLogout } from "react-icons/gr";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = !!token;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const locations = ['/login', '/register'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between bg-dark_blue items-center p-4 md:px-8 shadow-lg font-roboto gap-4 font-extrabold">
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <div className="flex items-center">
          <img src={sticker} alt="logo" className="w-16 h-16 rounded-full" />
          <span className="text-2xl text-white ml-4 font-semibold">StickMeMore</span>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      <div className={`flex-1 flex flex-col md:flex-row justify-center items-center hover:text-white_gray gap-5 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
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
      <div className={`flex items-center bg-slate-100 p-2 rounded-full mb-4 md:mb-0 w-full md:w-auto ${locations.includes(location.pathname) ? 'hidden' : 'block'}`}>
        <button type="submit" className="text-gray-400">
          <span className="material-symbols-outlined">search</span>
        </button>
        <input
          type="search"
          placeholder="Search..."
          className="ml-2 bg-slate-100 focus:outline-none w-full md:w-auto"
        />
      </div>
      <div className={`flex flex-col md:flex-row items-center gap-5 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        {isAuthenticated ? (
          <>
            <span className="text-white">Welcome, <span className='text-red_orange'>{user?.username}</span></span>
            <button
              onClick={handleLogout}
              className="cursor-pointer text-red-100 hover:text-white transition duration-300"
            >
              <div className='flex justify-center items-center gap-2 border rounded-sm p-2 hover:bg-beigee hover:text-dark_blue transition duration-500'>Logout<GrLogout /></div>
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
