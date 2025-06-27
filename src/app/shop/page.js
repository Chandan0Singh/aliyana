"use client";
import React, { useState } from "react";
import bagsData from "../../data/bags";
import PriceFilter from '../Components/PriceFilter';

const calculateDiscountedPrice = (price, sale) => {
  if (!sale) return price;
  const percentage = parseInt(sale.replace(/\[|\]|%/g, ""));
  const discounted = price - (price * percentage) / 100;
  return Math.floor(discounted);
};

const priceRanges = [
  { label: "Under ₹500", min: 0, max: 499 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "₹2000 - ₹3000", min: 2000, max: 3000 },
  { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
  { label: "Above ₹5000", min: 5001, max: Infinity },
];

const ShopPage = () => {
  // ✅ Move useState INSIDE the component
  const [selectedRange, setSelectedRange] = useState(null);

  const handlePriceChange = (range) => {
    setSelectedRange((prev) =>
      prev?.label === range.label ? null : range
    );
  };

  // ✅ Apply price filter to bagsData
  const filteredBags = selectedRange
    ? bagsData.filter((bag) => {
        const discounted = calculateDiscountedPrice(bag.price, bag.sale);
        return (
          discounted >= selectedRange.min && discounted <= selectedRange.max
        );
      })
    : bagsData;

  return (
    <div className='flex w-[95vw] mx-auto justify-between'>
      <PriceFilter
        priceRanges={priceRanges}
        selectedRange={selectedRange}
        onChange={handlePriceChange}
      />

      <div className="min-h-screen bg-white px-6 py-10 w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🛍️ Shop All Bags
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[90vh] overflow-auto pr-[2rem] custom-scrollbar">
          {filteredBags.map((bag) => {
            const discountedPrice = calculateDiscountedPrice(bag.price, bag.sale);
            return (
              <div
                key={bag.id}
                className="bg-gray-100 rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-700">
                  {bag.name}
                </h2>

                {bag.sale ? (
                  <div className="mt-1">
                    <p className="text-sm text-gray-500 line-through">
                      ₹{bag.price}
                    </p>
                    <p className="text-red-600 font-semibold">
                      ₹{discountedPrice}{" "}
                      <span className="text-xs text-green-600 ml-2">
                        {bag.sale} off
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-700 mt-1">₹{bag.price}</p>
                )}

                <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
