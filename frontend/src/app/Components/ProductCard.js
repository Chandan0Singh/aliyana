// components/ProductCard.js
'use client';
import React from 'react';

const ProductCard = ({ bag, onAddToCart, onBuyNow }) => {
  return (
    <div
      key={bag.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 group"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={bag.image}
          alt={bag.name}
          className="w-full h-60 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h2 className="text-lg font-semibold text-[#1E1B4B] mt-3">{bag.name}</h2>
      <p className="text-gray-700 mt-1 text-sm">₹{bag.price}</p>
      {bag.sale && (
        <p className="text-green-600 text-xs mt-1">{bag.sale}</p>
      )}

      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => onAddToCart?.(bag)}
          className="w-1/2 bg-gray-900 text-white py-2 text-sm rounded-xl hover:bg-gray-700 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onBuyNow?.(bag)}
          className="w-1/2 bg-indigo-600 text-white py-2 text-sm rounded-xl hover:bg-indigo-500 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



// // ExamplePage.js or any page
// import ProductCard from "@/components/ProductCard";

// const ExamplePage = ({ filteredProducts }) => {
//   const handleAddToCart = (product) => {
//     console.log("Added to cart:", product);
//     // Add your cart logic here
//   };

//   const handleBuyNow = (product) => {
//     console.log("Buying now:", product);
//     // Navigate to checkout or quick buy
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {filteredProducts.map((bag) => (
//         <ProductCard
//           key={bag.id}
//           bag={bag}
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />
//       ))}
//     </div>
//   );
// };

// export default ExamplePage;
