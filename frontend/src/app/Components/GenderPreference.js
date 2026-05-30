"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Searchbar";
import ProductCard from "./ProductCard";

const GenderPreference = ({ gender }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const priceRanges = [
    { label: "Under ₹500", min: 0, max: 499 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "₹2000 - ₹3000", min: 2000, max: 3000 },
    { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
    { label: "Above ₹5000", min: 5001, max: Infinity },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `/api/products/gender/${gender}`
        );

        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error(
          "Error fetching gender-based products:",
          err
        );
      }
    };

    fetchProducts();
  }, [gender]);

  const applyFilters = (
    query = searchQuery,
    range = selectedRange
  ) => {
    let updated = [...products];

    if (query) {
      updated = updated.filter((item) =>
        item.title
          ?.toLowerCase()
          .includes(query.toLowerCase())
      );
    }

    if (range) {
      updated = updated.filter(
        (item) =>
          item.price >= range.min &&
          item.price <= range.max
      );
    }

    setFilteredProducts(updated);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, selectedRange);
  };

  const handlePriceChange = (range) => {
    const newRange =
      selectedRange?.label === range.label
        ? null
        : range;

    setSelectedRange(newRange);
    applyFilters(searchQuery, newRange);
  };

  return (
    <div className="relative min-h-screen bg-[#FDF4FF] overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute right-0 top-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Hero */}
        <div className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-8 md:p-12 mb-10">

          <div className="text-center">

            <p className="text-[#C084FC] text-sm font-medium uppercase tracking-[4px]">
              Premium Collection
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-[#1E1B4B]">
              {gender === "male"
                ? "Men's Luxury Bags"
                : "Women's Luxury Bags"}
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover elegant bags crafted for style,
              comfort, and everyday luxury.
            </p>

            <div className="mt-6 inline-flex items-center px-5 py-2 rounded-full bg-[#F3E8FF]">
              <span className="text-[#1E1B4B] font-medium">
                {filteredProducts.length} Products Available
              </span>
            </div>

          </div>

        </div>

        {/* Search */}
        <div className="bg-white rounded-3xl shadow-lg border border-purple-100 p-4 mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Filter Pills */}
        <div className="mb-10">

          <div className="flex flex-wrap gap-3">

            {priceRanges.map((range) => {

              const active =
                selectedRange?.label === range.label;

              return (
                <button
                  key={range.label}
                  onClick={() => handlePriceChange(range)}
                  className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border
                    ${
                      active
                        ? "bg-[#C084FC] text-white border-[#C084FC] shadow-lg"
                        : "bg-white text-[#1E1B4B] border-purple-100 hover:border-[#C084FC]"
                    }`}
                >
                  {range.label}
                </button>
              );
            })}

          </div>

        </div>

        {/* Product Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">

          <div>

            <h2 className="text-2xl font-serif font-bold text-[#1E1B4B]">
              Featured Collection
            </h2>

            <p className="text-gray-500 mt-1">
              Handpicked premium products
            </p>

          </div>

          <div className="bg-white border border-purple-100 px-5 py-2 rounded-full shadow-sm w-fit">
            <span className="text-[#1E1B4B] font-medium">
              {filteredProducts.length} Results
            </span>
          </div>

        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (

          <div className="bg-white rounded-3xl p-16 text-center shadow-lg border border-purple-100">

            <div className="text-6xl mb-5">
              👜
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#1E1B4B]">
              No Products Found
            </h3>

            <p className="mt-3 text-gray-500 leading-relaxed">
              Try adjusting your search or price range.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredProducts.map((bag) => (
              <ProductCard
                key={bag._id}
                bag={bag}
              />
            ))}

          </div>

        )}

      </div>
    </div>
  );
};

export default GenderPreference;