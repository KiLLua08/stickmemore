import React from 'react';
import { Link } from 'react-router-dom';
import sticker from '../assets/sticker.png';

function Header() {
  return (
    <nav className='flex flex-col sm:flex-row md:flex-row justify-between p-4 items-center bg-slate-900 gap-4 md:gap-10'>
      <div className='logo mb-4 sm:mb-0'>
        <img src={sticker} alt="logo" className='w-20 rounded-full'/>
      </div>
      <div className='navigations'>
        <ul className='flex flex-col sm:flex-row justify-center gap-5 items-center my-font'>
          <li className='cursor-pointer text-red-100 hover:text-white'><Link to='/'>WELCOME</Link></li>
          <li className='cursor-pointer text-red-100 hover:text-white'><Link to='/home'>HOME</Link></li>
          <li className='cursor-pointer text-red-100 hover:text-white'><Link to='/shop'>SHOP</Link></li>
        </ul>
      </div>
      <div className='flex justify-center bg-slate-100 p-3 px-4 mx-2 rounded-full gap-2 mb-4 sm:mb-0'>
        <button type="submit"><span className="material-symbols-outlined text-gray-400">search</span></button>
        <input type="search" placeholder='Search...' style={{backgroundColor: '#f1f5f9'}} className="focus:outline-none"/>
      </div>
      <div className='flex justify-center gap-5 mx-5 my-font'>
        <Link className='cursor-pointer text-red-100 hover:text-white' to='/register'>REGISTER</Link>
        <div className='border h-6 border-red-100'></div>
        <Link className='cursor-pointer text-red-100 hover:text-white' to='/login'>LOGIN</Link>
      </div>
    </nav>
  );
}

export default Header;
