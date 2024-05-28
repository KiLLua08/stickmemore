import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    axios.get('https:/localhost:4000/api/stickers')
      .then(response => setStickers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Stickers Shop</h1>
      <ul>
        {stickers.map(sticker => (
          <li key={sticker._id}>
            <h2>{sticker.name}</h2>
            <p>{sticker.description}</p>
            <p>{sticker.price}</p>
            <img src={sticker.imageUrl} alt={sticker.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
