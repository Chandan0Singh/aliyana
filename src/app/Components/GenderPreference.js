// pages/man.js
import React from 'react';
import bagsData from '../../data/bags'

const GenderPreference = ({gender}) => {
  const menBags = bagsData.filter(bag => bag.gender === `${gender}`);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{gender}'s Bags</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menBags.map((bag) => (
          <div key={bag.id} className="bg-gray-100 rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300">
            <img src={bag.image} alt={bag.name} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">{bag.name}</h2>
            <p className="text-gray-600 mt-1">Price: ₹{bag.price}</p>
            <p className="text-green-600 font-semibold mt-1">Sale: {bag.sale}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenderPreference;
