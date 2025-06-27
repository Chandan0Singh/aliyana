'use client';
import React, { useState } from 'react';
import bagsData from '../../data/bags';

const availableTags = ['classic', 'premium', 'trending', 'popular', 'all'];

const ExplorePage = () => {
  const [selectedTag, setSelectedTag] = useState('classic'); // ✅ default: classic

  const handleCheckboxClick = (tag) => {
    setSelectedTag((prev) => (prev === tag ? null : tag)); // toggle same
  };

  const filteredBags = selectedTag && selectedTag !== 'all'
    ? bagsData.filter((bag) =>
        bag.tags?.some((tag) => tag.toLowerCase() === selectedTag)
      )
    : bagsData;

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">🧭 Explore Bags</h1>
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Filters */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Filter by One Tag</h2>
          <div className="space-y-2">
            {availableTags.map((tag) => (
              <label key={tag} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTag === tag}
                  onChange={() => handleCheckboxClick(tag)}
                  className="accent-black"
                />
                <span className="capitalize">{tag}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Bags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[90vh] overflow-auto pr-[2rem] custom-scrollbar w-full">
          {filteredBags.map((bag) => (
            <div key={bag.id} className="bg-gray-100 rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300">
              <img src={bag.image} alt={bag.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">{bag.name}</h2>
              <p className="text-gray-600 mt-1">Price: ₹{bag.price}</p>
              {bag.sale && <p className="text-red-500 mt-1">Sale: {bag.sale}</p>}
              <div className="flex flex-wrap gap-2 mt-2">
                {bag.tags?.map((tag, i) => (
                  <span key={i} className="bg-black text-white px-2 py-1 rounded text-xs">{tag}</span>
                ))}
              </div>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
