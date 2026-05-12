"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceFilter from "./PriceFilter";
import SearchBar from "./Searchbar";
import ProductCard from "./ProductCard";

const GenderPreference = ({ gender }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);

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

  // 🔍 Search
  const handleSearch = (query) => {

    let updated = [...products];

    // Search Filter
    if (query) {

      updated = updated.filter((item) =>
        item.title
          ?.toLowerCase()
          .includes(query.toLowerCase())
      );

    }

    // Price Filter
    if (selectedRange) {

      updated = updated.filter(
        (item) =>
          item.price >= selectedRange.min &&
          item.price <= selectedRange.max
      );

    }

    setFilteredProducts(updated);

  };

  // 💰 Price Filter
  const handlePriceChange = (range) => {

    const newRange =
      selectedRange?.label === range.label
        ? null
        : range;

    setSelectedRange(newRange);

    let updated = [...products];

    // Apply Price Filter
    if (newRange) {

      updated = updated.filter(
        (item) =>
          item.price >= newRange.min &&
          item.price <= newRange.max
      );

    }

    setFilteredProducts(updated);

  };

  const priceRanges = [
    { label: "Under ₹500", min: 0, max: 499 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "₹2000 - ₹3000", min: 2000, max: 3000 },
    { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
    { label: "Above ₹5000", min: 5001, max: Infinity },
  ];

  return (
    <div className="min-h-screen bg-[#FDF4FF] px-4 pt-12 pb-12">

      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10">

        {gender === "male"
          ? "Men's Bags"
          : "Women's Bags"}

      </h1>

      <div className="mb-14">
        <SearchBar onSearch={handleSearch} />
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

        {/* Products */}
        <div className="w-full">

          {filteredProducts.length === 0 ? (

            <p className="text-center text-gray-500">
              No bags found.
            </p>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
    </div>
  );
};

export default GenderPreference;