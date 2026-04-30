// components/ProductCard.js
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const ProductCard = ({ bag, onAddToCart, onBuyNow }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  const handleView = () => {
    router.push(`/product/${bag._id}`);
  };

  useEffect(() => {
    if (!user) return;

    const fetchCart = async () => {
      try {
        const res = await axios.get(`/api/cart/${user.user.id}`);
        setCart(res.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          // Cart not found — just show empty cart
          console.warn("🛒 No cart found for this user. Showing empty cart.");
          setCart({ items: [] }); // 👈 safe fallback
        } else {
          console.error("Failed to load cart", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  const isInCart = cart?.items?.some((item) => item.productId._id === bag._id);

  return (
    <div
      key={bag.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 group"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={bag.image}
          alt={bag.name}
          className="w-full h-60 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h2 className="text-lg font-semibold text-[#1E1B4B] mt-3">{bag.name}</h2>
      <p className="text-gray-700 mt-1 text-sm">₹{bag.price}</p>
      {bag.sale && <p className="text-green-600 text-xs mt-1">{bag.sale}</p>}

      <div className="flex space-x-2 mt-4">
        {isInCart ? (
          <button
            onClick={() => router.push("/cart")}
            className="w-1/2 bg-gray-900 text-white py-2 text-sm rounded-xl hover:bg-gray-700 transition"
          >
            View in cart
          </button>
        ) : (
          <button
            onClick={() => onAddToCart?.(bag)}
            className="w-1/2 bg-gray-900 text-white py-2 text-sm rounded-xl hover:bg-gray-700 transition"
          >
            Add to Cart
          </button>
        )}

        <button
          onClick={handleView}
          className="w-1/2 bg-indigo-600 text-white py-2 text-sm rounded-xl hover:bg-indigo-500 transition"
        >
          View Know
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
