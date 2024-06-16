import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Shop = () => {
  const [stickers, setStickers] = useState([]);
  const [filteredStickers, setFilteredStickers] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    type: '',
    priceRange: '',
  });

  useEffect(() => {
    const fetchStickers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/stickers/allStickers');
        console.log(response)
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

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(sticker => sticker.price >= min && sticker.price <= max);
    }

    setFilteredStickers(filtered);
  }, [filters, stickers]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="w-full md:w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="anime">Anime</option>
            <option value="nature">Nature</option>
            <option value="tech">Tech</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Type</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="vinyl">Vinyl</option>
            <option value="paper">Paper</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Price Range</label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="0-5">0 - 5 dt</option>
            <option value="5-10">5 - 10 dt</option>
            <option value="10-20">10 - 20 dt</option>
          </select>
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-xl font-bold mb-4">Stickers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStickers.map(sticker => (
            <Card image={sticker.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
