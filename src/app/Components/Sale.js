import React from 'react';
import bagsData from '../../data/bags';

const SalePage = () => {
  const saleBags = bagsData.filter(bag => bag.sale && bag.sale !== '[]');

  const getDiscountedPrice = (price, saleStr) => {
    const percentMatch = saleStr.match(/\d+/); // Extract number from '[15%]'
    if (!percentMatch) return price;
    const percent = parseInt(percentMatch[0], 10);
    return Math.round(price - (price * percent) / 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-red-600">🔥 On Sale</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {saleBags.map((bag) => {
          const discountedPrice = getDiscountedPrice(bag.price, bag.sale);

          return (
            <div key={bag.id} className="bg-red-50 border border-red-200 rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300">
              <img src={bag.image} alt={bag.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">{bag.name}</h2>
              <p className="text-gray-500 mt-1 line-through">MRP: ₹{bag.price}</p>
              <p className="text-green-700 font-bold mt-1">Now: ₹{discountedPrice}</p>
              <p className="text-red-600 text-sm">You save {bag.sale}</p>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalePage;
