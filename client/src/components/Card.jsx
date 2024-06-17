import React from 'react';
import { FaSheetPlastic } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';
import { IoPricetagsOutline, IoPricetags } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { stickersUrl } from '../assets/stickersUrl.js';

function Card({ imageUrl, price, category, type }) {
  return (
    <motion.div
      className="block rounded-lg p-4 shadow-sm shadow-indigo-500 cursor-pointer hover:scale-105 transition duration-300 active:scale-95"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        alt='Sticker'
        src={stickersUrl[0].url}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2 flex justify-center">
        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <h3 className='text-indigo-700 text-lg'><MdCategory /></h3>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Category</p>
              <p className="font-medium">{category}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <h3 className='text-indigo-700 text-lg'><IoPricetags /></h3>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Price</p>
              <p className="font-medium flex gap-1">{price} <span>dt</span></p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <h3 className='text-indigo-700 text-lg'><FaSheetPlastic /></h3>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Type</p>
              <p className="font-medium">{type}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
