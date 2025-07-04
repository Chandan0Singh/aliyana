"use client";
import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ id, name, image, price, sale }) {
  const [hovered, setHovered] = useState(false);

  // 🎯 Discount calculator
  const calculateDiscountedPrice = (price, sale) => {
    if (!sale) return price;
    const percentage = parseInt(sale.replace(/\[|\]|%/g, ""));
    const discounted = price - (price * percentage) / 100;
    return Math.floor(discounted);
  };

  const discountedPrice = calculateDiscountedPrice(price, sale);

  return (
    <div
      className="relative bg-white rounded-xl shadow p-4 transition-all duration-300 hover:shadow-lg group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Hover Icons */}
      {hovered && (
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
            <FaShoppingCart size={16} />
          </button>
        </div>
      )}
      {hovered && (
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
            <FaHeart size={16} />
          </button>
        </div>
      )}

      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />

      <h2 className="text-base sm:text-lg font-semibold text-[#1E1B4B]">
        {name}
      </h2>

      {sale ? (
        <div className="mt-1">
          <p className="text-sm text-gray-500 line-through">₹{price}</p>
          <p className="text-red-600 font-semibold">
            ₹{discountedPrice}
            <span className="text-xs text-green-600 ml-2">{sale} off</span>
          </p>
        </div>
      ) : (
        <p className="text-gray-700 mt-1 text-sm sm:text-base">₹{price}</p>
      )}

      <button className="mt-4 w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition text-sm sm:text-base">
        Add to Cart
      </button>
    </div>
  );
}
