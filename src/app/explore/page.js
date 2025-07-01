"use client";
import React, { useState } from "react";
import bagsData from "../../data/bags";

const availableTags = ["classic", "premium", "trending", "popular", "all"];

const ExplorePage = () => {
  const [selectedTag, setSelectedTag] = useState("classic");

  const handleCheckboxClick = (tag) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  const filteredBags =
    selectedTag && selectedTag !== "all"
      ? bagsData.filter((bag) =>
          bag.tags?.some((tag) => tag.toLowerCase() === selectedTag)
        )
      : bagsData;

  return (
    <div className="min-h-screen bg-[#FDF4FF] px-6 py-12">
      <h1 className="text-4xl font-heading text-[#1E1B4B] mb-10 text-center">
        🧭 Explore Bags
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-1/4 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#1E1B4B] mb-4">
            Filter by Tag
          </h2>
          <div className="space-y-4">
            {availableTags.map((tag) => (
              <label
                key={tag}
                className={`flex items-center gap-3 cursor-pointer text-sm ${
                  selectedTag === tag
                    ? "text-[#4C1D95] font-medium"
                    : "text-[#4B5563] hover:text-[#1E1B4B]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTag === tag}
                  onChange={() => handleCheckboxClick(tag)}
                  className="accent-[#C084FC]"
                />
                <span className="capitalize">{tag}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Bags Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[75vh] overflow-y-auto pr-4 custom-scrollbar">
          {filteredBags.map((bag) => (
            <div
              key={bag.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={bag.image}
                alt={bag.name}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-[#1E1B4B]">
                {bag.name}
              </h2>
              <p className="text-[#C084FC] font-medium mt-1">
                ₹{bag.price}
              </p>
              {bag.sale && (
                <p className="text-red-500 mt-1 text-sm">Sale: {bag.sale}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-3">
                {bag.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#F3E8FF] text-[#4C1D95] px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 w-full bg-[#C084FC] hover:bg-[#4C1D95] text-white py-2 rounded-full transition">
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
