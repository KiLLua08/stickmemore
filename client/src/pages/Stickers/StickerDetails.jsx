import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StickerDetailsPage = () => {
  const { id } = useParams();
  const [sticker, setSticker] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/stickers/${id}`)
      .then(response => setSticker(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!sticker) return <div>Loading...</div>;

  return (
    <div>
      <h1>{sticker.name}</h1>
      <img src={sticker.imageUrl} alt={sticker.name} width="300" />
      <p>{sticker.description}</p>
      <p>${sticker.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default StickerDetailsPage;
