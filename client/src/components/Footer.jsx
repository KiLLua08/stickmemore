import React from 'react'
import { Link } from 'react-router-dom'
import fb from '/facebook.png'
import gamer from '/gamer.png'
import gmail from '/gmail.png'
import instagram from '/instagram.png'

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
        <div className='flex'>
          <a href=""><img src={fb} alt="facebook" /></a>
          <a href=""><img src={gamer} alt="gamer" /></a>
          <a href=""><img src={gmail} alt="gmail" /></a>
          <a href="https://www.instagram.com/stick_me_more/" target='_blank'><img src={instagram} alt="instagram" /></a>
        </div>
      </div>
    </div>
  )
}
{/**/}
export default Footer
