"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Components/Searchbar";
import ProductCard from "../Components/ProductCard";

const calculateDiscountedPrice = (price, sale) => {
  if (!sale) return price;

  const percentage = parseInt(sale.replace(/\[|\]|%/g, ""));
  const discounted = price - (price * percentage) / 100;

  return Math.floor(discounted);
};

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");

        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products);
    } else {
      const search = query.toLowerCase();

      const filtered = products.filter((item) =>
        item?.title?.toLowerCase().includes(search)
      );

      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF4FF] text-[#1E1B4B]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-purple-100">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-200/30 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#C084FC] shadow-sm border border-purple-100 mb-6">
              ✨ Premium Collection
            </span>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight text-[#1E1B4B]">
              Discover Stylish Bags
              <span className="block text-[#C084FC] mt-2">
                Crafted For Everyday Elegance
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#5B5675] max-w-2xl mx-auto">
              Explore trendy, elegant, and premium-quality bags designed to
              complement your everyday style.
            </p>

            {/* SEARCH */}
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg border border-purple-100 p-3 sm:p-4">
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B4B]">
              Our Collection
            </h2>

            <p className="text-md text-[#6B6685] mt-2 leading-relaxed">
              {filteredProducts.length} products available
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-white border border-purple-100 shadow-sm text-sm font-medium text-[#1E1B4B]">
              👜 Latest Designs
            </div>

            <div className="px-4 py-2 rounded-2xl bg-[#C084FC] text-white shadow-md text-sm font-medium">
              💜 Trending
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl p-4 shadow-sm border border-purple-100 animate-pulse"
              >
                <div className="h-64 bg-purple-100 rounded-2xl mb-4"></div>

                <div className="h-5 bg-purple-100 rounded w-3/4 mb-3"></div>

                <div className="h-4 bg-purple-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((bag) => {
              const discountedPrice = calculateDiscountedPrice(
                bag.price,
                bag.sale
              );

              return (
                <div
                  key={bag._id}
                  className="group transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-white rounded-[28px] border border-purple-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <ProductCard
                      bag={{
                        ...bag,
                        discountedPrice,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 rounded-full bg-white border border-purple-100 flex items-center justify-center shadow-sm mb-6 text-4xl">
              🛍️
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#1E1B4B]">
              No Products Found
            </h3>

            <p className="text-lg text-[#6B6685] mt-3 leading-relaxed max-w-md">
              Try searching with a different keyword to discover more amazing
              products.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

//ui change unread

export default ShopPage;