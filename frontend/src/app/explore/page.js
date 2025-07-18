"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Components/Searchbar";
import ProductCard from "../Components/ProductCard";
import { useAuth } from "../../context/AuthContext";

const availableTags = ["classic", "premium", "trending", "popular", "all"];

const ExplorePage = () => {
  const { user } = useAuth();
  const [selectedTag, setSelectedTag] = useState("classic");
  const [bagsData, setBagsData] = useState({});
  const [filteredBags, setFilteredBags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products/explore");
      const data = await res.json();
      setBagsData(data);
      setLoading(false);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const selectedData = bagsData[selectedTag] || [];

    const searched = selectedData.filter((bag) => {
      const query = searchQuery.toLowerCase();

      const nameMatch = bag.name.toLowerCase().includes(query);
      const tagMatch = bag.tags?.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      return query === "" || nameMatch || tagMatch;
    });

    setFilteredBags(searched);
  }, [selectedTag, searchQuery, bagsData]);

  const handleCheckboxClick = (tag) => {
    setSelectedTag((prev) => (prev === tag ? "all" : tag));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
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
    <div className="min-h-screen bg-[#FDF4FF] px-4 sm:px-6 py-10 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-heading text-[#1E1B4B] mb-8 sm:mb-10 text-center">
        🧭 Explore Bags
      </h1>

      <div className="mb-12">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white rounded-2xl shadow-md p-5 sm:p-6 h-fit">
          <h2 className="text-lg sm:text-xl font-semibold text-[#1E1B4B] mb-4">
            Filter by Tag
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {availableTags.map((tag) => (
              <label
                key={tag}
                className={`flex items-center gap-3 cursor-pointer text-sm sm:text-base ${selectedTag === tag
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

        {/* Product Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading ? (
            <p>Loading bags...</p>
          ) : filteredBags.length > 0 ? (
            filteredBags.map((bag) => (
              <ProductCard
                key={bag.id}
                bag={bag}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            ))
          ) : (
            <p>No bags found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
