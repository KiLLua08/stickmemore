import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <div className='flex justify-center flex-col gap-2 items-center'>
      <h1 className='text-violet-600 font-bold'>404</h1>
      <p className='text-4xl font-bold'>Page not found</p>
      <p className='text-gray-600'>Sorry, the page you are looking for doesn't exist.</p>
      <div className='flex justify-center gap-8'>
        <Link to='/home' className='text-white font-semibold bg-indigo-600 m-2 p-2 px-3 rounded-lg hover:bg-indigo-500'>Go back home</Link>
        <Link to='/contact' className='text-black font-medium self-center'>Contact support -{'>'}</Link>
      </div>
    </div>
  )
}

export default NoPage
