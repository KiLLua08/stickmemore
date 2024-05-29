import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-gray-800 text-white py-8 px-3'>
      <div className='container mx-auto flex justify-center items-center flex-wrap gap-40'>
        <Link to='/' className='text-lg font-bold'>StickMeMore</Link>
        <div className='flex gap-4'>
          <Link to='/home' className='hover:text-gray-300 hover:underline'>Home</Link>
          <Link to='/shop' className='hover:text-gray-300 hover:underline'>Shop</Link>
          <Link to='/about' className='hover:text-gray-300 hover:underline'>About</Link>
          <Link to='/contact' className='hover:text-gray-300 hover:underline'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
