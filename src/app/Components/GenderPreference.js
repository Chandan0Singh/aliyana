"use client";
import React, { useState } from "react";
import bagsData from "../../data/bags";
import PriceFilter from "./PriceFilter";
import SearchBar from "./Searchbar";

const GenderPreference = ({ gender }) => {
  const priceRanges = [
    { label: "Under ₹500", min: 0, max: 499 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "₹2000 - ₹3000", min: 2000, max: 3000 },
    { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
    { label: "Above ₹5000", min: 5001, max: Infinity },
  ];

  const [selectedRange, setSelectedRange] = useState(null);

  const handlePriceChange = (range) => {
    setSelectedRange((prev) => (prev?.label === range.label ? null : range));
  };

  const genderFiltered = bagsData.filter((bag) => bag.gender === gender);

  const filteredProducts = genderFiltered.filter((bag) => {
    if (!selectedRange) return true;
    return bag.price >= selectedRange.min && bag.price <= selectedRange.max;
  });

  return (
    <div className="min-h-screen bg-[#FDF4FF] px-4 pt-10 pb-12">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10">
        {gender === "male" ? "Men's Bags" : "Women's Bags"}
      </h1>

      <div className="mb-14">
        <SearchBar />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <PriceFilter
            priceRanges={priceRanges}
            selectedRange={selectedRange}
            onChange={handlePriceChange}
          />
        </div>

        {/* Product Grid */}
        <div className="w-full">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No bags in this range.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((bag) => (
                <div
                  key={bag.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
                >
                  <img
                    src={bag.image}
                    alt={bag.name}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold text-[#1E1B4B]">
                    {bag.name}
                  </h2>
                  <p className="text-gray-700 mt-1">₹{bag.price}</p>
                  {bag.sale && (
                    <p className="text-green-600 text-sm mt-1">{bag.sale}</p>
                  )}
                  <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenderPreference;
