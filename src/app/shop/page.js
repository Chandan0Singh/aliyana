"use client";
import React from "react";
import bagsData from "../../data/bags";
import SearchBar from "../Components/Searchbar";

// 🎯 Discount price calculator
const calculateDiscountedPrice = (price, sale) => {
  if (!sale) return price;
  const percentage = parseInt(sale.replace(/\[|\]|%/g, ""));
  const discounted = price - (price * percentage) / 100;
  return Math.floor(discounted);
};

const ShopPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-[#FDF4FF] text-[#1E1B4B]">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">
        🛍️ Shop All Bags
      </h1>

      <div className="mb-[3.75rem]">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 custom-scrollbar">
        {bagsData.map((bag) => {
          const discountedPrice = calculateDiscountedPrice(bag.price, bag.sale);

          return (
            <div
              key={bag.id}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={bag.image}
                alt={bag.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{bag.name}</h2>

              {bag.sale ? (
                <div className="mt-1">
                  <p className="text-sm text-gray-500 line-through">
                    ₹{bag.price}
                  </p>
                  <p className="text-red-600 font-semibold">
                    ₹{discountedPrice}
                    <span className="text-xs text-green-600 ml-2">
                      {bag.sale} off
                    </span>
                  </p>
                </div>
              ) : (
                <p className="text-gray-700 mt-1">₹{bag.price}</p>
              )}

              <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
