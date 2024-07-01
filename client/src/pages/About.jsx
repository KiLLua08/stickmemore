import React from 'react'
import Lottie from 'react-lottie';
import loader from '../animations/loader.json'
import x from '../animations/x.json'
import xx from '../animations/xx.json'
import bestSale from '../animations/best-sale.json'
import store from '../animations/store-animation.json'

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: store,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className='flex justify-center items-center flex-col'>
      ABOUT 
      <Lottie options={defaultOptions}
              height={400}
              width={400} />
    </div>
  )
}

export default About
