import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Puff } from 'react-loader-spinner';
import { stickersUrl } from '../../assets/stickersUrl';
import kill from "../../assets/kill.jpg"
const StickerDetailsPage = () => {
  const { id } = useParams();
  const [sticker, setSticker] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:4000/api/stickers/${id}`)
      .then(response => setSticker(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!sticker) return  <Puff
  visible={true}
  height="30"
  width="30"
  color="#05eaff"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>;

  return (
    <div className='flex flex-col border p-5 text-lg shadow-md bg-zinc-950 text-white gap-4'>
      <h1>{id}</h1>
      <img src={kill} alt='sticker' className='w-[400px] border-[16px] border-white'/>
      
      <button className='border p-2 bg-orange-300 font-bold text-black'>Add to Cart</button>
    </div>
  );
};

export default StickerDetailsPage;
