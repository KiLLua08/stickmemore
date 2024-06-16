import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { stickersUrl } from '../../assets/stickersUrl';
import { motion } from 'framer-motion';

const Stickers = () => {
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
    axios.get('http://localhost:4000/api/stickers/allStickers')
      .then(response => {
        setStickers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Failed to load stickers. Please try again later.');
        setLoading(false);
      });
    }, 2000);
  }, []);
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='flex flex-col justify-between items-center gap-20 p-10 text-center'>
      <h1 className='text-6xl pt-20 gradient-text font-bold'>Stickers Shop</h1>
      <ul className='flex gap-20 border p-5 justify-center flex-wrap'>
        <SkeletonTheme color="#f3f3f3" highlightColor="#e5e5e5"> {/* Setting SkeletonTheme with lighter colors */}
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className='flex flex-col justify-center items-center border p-5 rounded-md h-[300px] w-[300px] cursor-pointer bg-slate-900 text-amber-100'>
                <div style={{ backgroundColor: '#e5e5e5', width: '100%', height: '75%', borderRadius: '0.5rem', position: 'relative' }}>
                  <Skeleton width="100%" height="100%" style={{ borderRadius: '0.5rem' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)' }} />
                </div>
                <div style={{ backgroundColor: '#f3f3f3', width: '80%', height: '20%', marginTop: '1rem', borderRadius: '0.5rem', position: 'relative' }}>
                  <Skeleton width="100%" height="100%" style={{ borderRadius: '0.5rem' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)' }} />
                </div>
              </li>
            ))
          ) : (
            stickers.map((sticker, index) => (
              <motion.li
                key={sticker._id}
                className='flex flex-col justify-center items-center border p-5 rounded-md h-[300px] w-[300px] cursor-pointer bg-slate-900 text-amber-100'
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img src={stickersUrl[0].url} alt={sticker.name} width="100" className='w-full h-3/4 rounded-md border-8' />
                <h2 className='h-1/4 pt-5'>{sticker.name}</h2>
              </motion.li>
            ))
          )}
        </SkeletonTheme>
      </ul>
    </div>
  );
};

export default Stickers;
