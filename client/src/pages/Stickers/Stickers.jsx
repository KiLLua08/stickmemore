import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {stickersUrl} from '../../assets/stickersUrl';

const App = () => {
  const [stickers, setStickers] = useState([]);
  
  useEffect(() => {
    console.log(stickersUrl)
    axios.get('http://localhost:4000/api/stickers/allStickers')
      .then(response => setStickers(response.data))
      .catch(error => console.error(error));
  }, [stickersUrl]);

  return (
    <div className='flex flex-col justify-between items-center gap-20 p-10 text-center'>
      <h1 className='text-6xl pt-20 gradient-text font-bold'>Stickers Shop</h1>
      <ul className='flex gap-20 border p-5 justify-center flex-wrap'>
        {stickers.map(sticker => (
          <li key={sticker._id} className='flex flex-col justify-center items-center border p-5 rounded-md h-[300px] w-[300px] cursor-pointer bg-slate-900 text-amber-100'>
            <img src={stickersUrl[0].url} alt={sticker.name} width="100" className='w-full h-3/4 rounded-md border-8' />
            {/* <img src={sticker.imageUrl} alt={sticker.name} width="100" /> */}
            <h2 className='h-1/4 pt-5'>{sticker.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
