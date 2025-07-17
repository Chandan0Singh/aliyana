"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "../Components/Searchbar";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

// 🧠 Utility to calculate discount
const calculateDiscountedPrice = (price, sale) => {
  if (!sale) return price;
  const percentage = parseInt(sale.replace(/\[|\]|%/g, ""));
  const discounted = price - (price * percentage) / 100;
  return Math.floor(discounted);
};

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products/sale");
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error("Error loading sale products:", err);
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
        item.name.toLowerCase().includes(search)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (bag) => {
    console.log("Adding to cart:", bag);
    // TODO: Implement actual add-to-cart logic here
  };

  const handleBuyNow = (bag) => {
    console.log("Buying now:", bag);
    // TODO: Redirect to checkout or open modal
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 bg-[#FDF4FF] text-[#1E1B4B]">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10 sm:mb-12">
        🛍️ Shop All Bags
      </h1>

      <div className="mb-16">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 custom-scrollbar">
        {filteredProducts.map((bag) => {
          const discountedPrice = calculateDiscountedPrice(bag.price, bag.sale);

          return (
            <ProductCard
              key={bag.id}
              bag={bag}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
