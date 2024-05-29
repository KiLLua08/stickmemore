import React from 'react';
import { Link } from 'react-router-dom';
import sticker from '../assets/sticker.png';

function Header() {
  return (
    <nav className='flex flex-col sm:flex-row justify-between p-8 items-center bg-slate-900 gap-10 '>
      <div className='logo'>
        <img src={sticker} alt="logo" className='w-20 rounded-full'/>
      </div>
      <div className='navigations'>
        <ul className='flex flex-col sm:flex-row justify-center gap-5 items-center'>
            <li className='cursor-pointer text-red-100 hover:text-white'><Link to='/'>WELCOME</Link></li>
            <li className='cursor-pointer text-red-100 hover:text-white'><Link to='/home'>HOME</Link></li>
            <li className='cursor-pointer text-red-100 hover:text-white'><Link to='/shop'>SHOP</Link></li>
        </ul>
      </div>
      <div className='bg-slate-100 p-3 px-4 mx-2 rounded-full flex justify-center gap-2 '>
        <button type="submit"><span className="material-symbols-outlined text-gray-400">search</span></button>
        <input type="search" placeholder='Search...' style={{backgroundColor: '#f1f5f9'}} className="focus:outline-none" />
      </div>
      <div className='flex justify-center gap-5 mx-5'>
        <Link className='cursor-pointer text-red-100 hover:text-white' to='/register'>REGISTER</Link>
        <div className='border'></div>
        <Link className='cursor-pointer text-red-100 hover:text-white' to='/login'>LOGIN</Link>
      </div>
    </nav>
  );
}

export default Header;