import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { AnimatePresence, motion } from 'framer-motion';

const Shop = () => {
  const [stickers, setStickers] = useState([]);
  const [filteredStickers, setFilteredStickers] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    type: '',
  });

  useEffect(() => {
    const fetchStickers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/stickers/allStickers');
        setStickers(response.data);
        setFilteredStickers(response.data);
      } catch (error) {
        console.error('Error fetching stickers:', error);
      }
    };

    fetchStickers();
  }, []);

  useEffect(() => {
    let filtered = stickers;

    if (filters.category) {
      filtered = filtered.filter(sticker => sticker.category === filters.category);
    }

    if (filters.type) {
      filtered = filtered.filter(sticker => sticker.type === filters.type);
    }

    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      filtered = filtered.filter(sticker => sticker.price >= min && sticker.price <= max);
    }

    setFilteredStickers(filtered);
  }, [filters, stickers]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='text-emerald-500 p-2 text-center font-bold text-2xl mb-10 w-[200px] border rounded-lg shadow-sm shadow-blue-950'
        style={{fontFamily : 'agbalumo'}}
      >
        Shop
      </div>
      <div className="flex flex-col border md:flex-row min-h-screen w-full">
        <div className="w-full md:w-1/4 p-4 bg-gray-200">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block mb-2">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded focus:border-violet-400 focus:border-2 focus:bg-violet-200 cursor-pointer"
            >
              <option value="">All</option>
              <option value="anime">Anime</option>
              <option value="sport">Sport</option>
              <option value="quotes">Quotes</option>
              <option value="gaming">Gaming</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Type</label>
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded focus:border-violet-400 focus:border-2 focus:bg-violet-200 cursor-pointer"
            >
              <option value="">All</option>
              <option value="vinyl">Vinyl</option>
              <option value="paper">Paper</option>
              <option value="wood">Wood</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Price Range</label>
            <select
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded focus:border-violet-400 focus:border-2 focus:bg-violet-200 cursor-pointer"
            >
              <option value="">All</option>
              <option value="0-88">0 - 88 dt</option>
              <option value="0.9-1">0.9 - 1.4 dt</option>
              <option value="1.5-2">1.5 - 2 dt</option>
            </select>
          </div>
        </div>

        <div className="w-full md:w-3/4 p-4">
          <h2 className="text-xl font-bold mb-4">Stickers</h2>
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStickers.map((sticker, index) => (
                <motion.div
                  key={sticker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <Card
                    imageUrl={sticker.image}
                    price={sticker.price}
                    category={sticker.category}
                    type={sticker.type}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Shop;
