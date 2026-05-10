"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const CartBtn = ({ bag }) => {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const router = useRouter();


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

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await axios.get(`/api/cart/${user.user.id}`);
        setCart(res.data);
      } catch (err) {
        if (err.response?.status === 404) {
          console.warn("🛒 No cart found");
          setCart({ items: [] });
        } else {
          console.error("Failed to load cart", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  const isInCart = cart?.items?.some(
    (item) =>
      (item.productId?._id || item.productId) === bag?._id
  );

  if (loading) {
    return (
      <button className="w-1/2 bg-gray-400 text-white py-2 text-sm rounded-xl">
        Loading...
      </button>
    );
  }

  return (
    <>
      {isInCart ? (
        <button
          onClick={() => router.push("/cart")}
          className="w-1/2 bg-indigo-600 text-white py-2 text-sm rounded-xl hover:bg-indigo-500 transition"
        >
          View in Cart
        </button>
      ) : (
        <button
          onClick={() => handleAddToCart(bag)}
          className="w-1/2 bg-gray-900 text-white py-2 text-sm rounded-xl hover:bg-gray-700 transition"
        >
          Add to Cart
        </button>
      )}
    </>
  );
};

export default CartBtn;