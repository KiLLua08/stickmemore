import React from 'react'
import { stickersUrl } from '../assets/stickersUrl'
import { FaSheetPlastic } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";



function Card({imageUrl, price, category, type }) {
  return (
    <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-500">
  <img
    alt=""
    src={stickersUrl[0].url}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2 flex justify-center">
    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <h3 className='text-indigo-700 text-lg'><MdCategory /></h3>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Category</p>
          <p className="font-medium">Anime</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
      <h3 className='text-indigo-700 text-lg'><IoPricetagsOutline /></h3>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Price</p>

          <p className="font-medium flex gap-1">0.8<h1>dt</h1></p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
      <h3 className='text-indigo-700 text-lg'><FaSheetPlastic /></h3>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Type</p>

          <p className="font-medium">Plastic</p>
        </div>
      </div>
    </div>
  </div>
</a>
  )
}

export default Card
