"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Components/Searchbar";
import ProductCard from "../Components/ProductCard";
import { useAuth } from "../../context/AuthContext";

const calculateDiscountedPrice = (price, sale) => {
  if (!sale) return price;
  const percentage = parseInt(sale.replace(/\[|\]|%/g, ""));
  const discounted = price - (price * percentage) / 100;
  return Math.floor(discounted);
};

const ShopPage = () => {
  const { user } = useAuth();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error("Error loading products:", err);
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

  const handleAddToCart = async (bag) => {

    if (!user) {
      alert("Please log in to add items to cart.");
      return;
    }

    try {
      console.log("Sending request to: http://localhost:5000/api/cart/add");
      const res = await axios.post("/api/cart/add", {
        userId: user.user.id,
        productId: bag._id,
        quantity: 1,
      });

      console.log("Cart updated:", res.data);
      alert("✅ Added to cart");
    } catch (err) {
      console.error("Add to cart failed:", err);
      alert("❌ Failed to add to cart");
    }
  };

  const handleBuyNow = (bag) => {
    if (!user) {
      alert("Please log in to buy now.");
      return;
    }

    // Navigate to checkout or do whatever is needed
    console.log("Buying now:", bag);
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
