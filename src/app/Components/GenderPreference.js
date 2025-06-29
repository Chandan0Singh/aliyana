"use client";
import React, { useState } from "react";
import bagsData from "../../data/bags";
import PriceFilter from "./PriceFilter";
import SearchBar from "./searchbar";

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
    console.log(selectedRange);
  };

  const GenderPreference = bagsData.filter((bag) => bag.gender === `${gender}`);
  const filteredProducts = GenderPreference.filter((products) => {
    if (!selectedRange) return true;
    return (
      products.price >= selectedRange.min && products.price <= selectedRange.max
    );
  });

   const handleSearch = () => {
    console.log("Search clicked");
  };

  // console.log(filteredProducts);

  return (
    <>
    <SearchBar onSearch={handleSearch} />
    <div className="flex w-[95vw] mx-auto justify-between">
      <PriceFilter
        priceRanges={priceRanges}
        selectedRange={selectedRange}
        onChange={handlePriceChange}
      />

      <div className="min-h-screen bg-white px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {gender}'s Bags
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-[65vh] overflow-auto pr-[2rem] custom-scrollbar">
          {filteredProducts.map((bag) => (
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
              <p className="text-gray-600 mt-1">Price: ₹{bag.price}</p>
              <p className="text-green-600 font-semibold mt-1">
                Sale: {bag.sale}
              </p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default GenderPreference;
