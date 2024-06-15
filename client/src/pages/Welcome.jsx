import React from 'react'
import sticker from '../assets/sticker.png'
import { Link } from 'react-router-dom'
function Welcome() {
  return (
    <div className='flex justify-center flex-col border-4 items-center py-20 gap-10'>
      <div className='text-6xl gradient-text text-center' style={{fontFamily: 'Agbalumo'}}>WELCOME TO STICKMEMORE</div>
      <div>
        <img src={sticker} alt="" className='rounded-3xl' />
        <Link to="/stickers">Browse Stickers --</Link>
      </div>
    </div>
  )
}

export default Welcome
