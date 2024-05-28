import React from 'react'
import sticker from '../assets/sticker.png'

function Welcome() {
  return (
    <div className='flex justify-center flex-col border-4 items-center py-20 gap-10'>
      <div className='text-6xl text-orange-300' style={{fontFamily: 'Agbalumo'}}>WELCOME TO STICKMEMORE</div>
      <div>
        <img src={sticker} alt="" className='rounded-3xl' />
      </div>
    </div>
  )
}

export default Welcome
