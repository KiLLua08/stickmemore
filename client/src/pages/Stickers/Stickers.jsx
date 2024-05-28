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
    <div>
      <h1 className='text-4xl p-20'>Stickers Shop</h1>
      <ul>
        {stickers.map(sticker => (
          <li key={sticker._id}>
            <h2>{sticker.name}</h2>
            <p>{sticker.description}</p>
            <p>{sticker.price}</p>
            <img src={stickersUrl[0].url} alt={sticker.name} width="100" />
            {/* <img src={sticker.imageUrl} alt={sticker.name} width="100" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
