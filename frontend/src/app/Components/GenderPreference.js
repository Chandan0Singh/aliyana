"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceFilter from "./PriceFilter";
import SearchBar from "./Searchbar";
import ProductCard from "./ProductCard";
import { useAuth } from "../../context/AuthContext";

const GenderPreference = ({ gender }) => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]); // all products
  const [filteredProducts, setFilteredProducts] = useState([]); // after search
  const [selectedRange, setSelectedRange] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/api/products/gender/${gender}`)
        setProducts(res.data)
        setFilteredProducts(res.data);
      } catch {
        console.error("Error fetching gender-based products:");
      }

    }
    fetchProducts()
  }, [])

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


  const priceRanges = [
    { label: "Under ₹500", min: 0, max: 499 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "₹2000 - ₹3000", min: 2000, max: 3000 },
    { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
    { label: "Above ₹5000", min: 5001, max: Infinity },
  ];


  const handlePriceChange = (range) => {
    const newRange =
      selectedRange?.label === range.label ? null : range;
    setSelectedRange(newRange);

    // 🧠 Re-apply filters on search + price
    let updated = [...products];

    if (newRange) {
      updated = updated.filter(
        (item) => item.price >= newRange.min && item.price <= newRange.max
      );
    }

    setFilteredProducts(updated);
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
    console.log("Buying now:", bag);
    // TODO: Redirect to checkout or open modal
  };



  return (
    <div className="min-h-screen bg-[#FDF4FF] px-4 pt-12 pb-12">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10">
        {gender === "male" ? "Men's Bags" : "Women's Bags"}
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

        <div className="w-full">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No bags in this range.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((bag) => (


                <ProductCard
                  key={bag._id}
                  bag={bag}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
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
