"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Components/Searchbar";
import ProductCard from "../Components/ProductCard";
import { useAuth } from "../../context/AuthContext";

const NewArrivalPage = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products/new");
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
    <div className="min-h-screen bg-white px-4 sm:px-6 py-10 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B4B] mb-8 text-center">
        🆕 New Arrivals
      </h1>

      <div className="mb-12">
        <SearchBar onSearch={handleSearch} />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No new arrivals at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((bag) => (
            <ProductCard
              key={bag.id}
              bag={bag}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewArrivalPage;
