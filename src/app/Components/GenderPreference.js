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
  };

  const genderFiltered = bagsData.filter((bag) => bag.gender === gender);

  const filteredProducts = genderFiltered.filter((product) => {
    if (!selectedRange) return true;
    return product.price >= selectedRange.min && product.price <= selectedRange.max;
  });

  const handleSearch = (text) => {
    console.log("Search clicked with:", text);
    // Optional: add search filtering logic here
  };

  return (
    <section className="bg-[#FDF4FF] min-h-screen py-10">
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-col md:flex-row w-[95vw] mx-auto gap-6 mt-10">
        {/* Price Filter */}
        <PriceFilter
          priceRanges={priceRanges}
          selectedRange={selectedRange}
          onChange={handlePriceChange}
        />

        {/* Product Grid */}
        <div className="flex-1 bg-white rounded-xl shadow px-6 py-8">
          <h1 className="text-3xl font-heading text-[#1E1B4B] mb-6">
            {gender}'s Bags
          </h1>

          {filteredProducts.length === 0 ? (
            <p className="text-[#6B7280]">No bags available for this selection.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
              {filteredProducts.map((bag) => (
                <div
                  key={bag.id}
                  className="bg-white border border-[#E5E7EB] rounded-2xl shadow hover:shadow-lg p-4 transition-all"
                >
                  <img
                    src={bag.image}
                    alt={bag.name}
                    className="w-full h-60 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-lg font-semibold text-[#1E1B4B]">{bag.name}</h2>
                  <p className="text-[#4B5563] mt-1">Price: ₹{bag.price}</p>
                  <p className="text-green-600 font-medium mt-1">Sale: {bag.sale}</p>
                  <button className="mt-4 px-4 py-2 bg-[#C084FC] hover:bg-[#4C1D95] text-white rounded-full transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GenderPreference;
