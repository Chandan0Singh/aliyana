"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Cart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (!user) return <p className="p-4 text-red-600">Please log in to view your cart.</p>;
  if (loading) return <p className="p-4">Loading cart...</p>;
  if (!cart || cart.items.length === 0)
    return <p className="p-4 min-h-[51vh] text-gray-700">🛒 Your cart is empty.</p>;

  const calculateItemTotal = (item) => {
    const price = item.productId.price;
    return price * item.quantity;
  };

  const totalPrice = cart.items.reduce(
    (acc, item) => acc + calculateItemTotal(item),
    0
  );

  return (
    <div className="min-h-screen px-4 py-10 bg-white text-[#1E1B4B]">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      <div className="space-y-6">
        {cart.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <img
              src={item.productId.image}
              alt={item.productId.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.productId.name}</h2>
              <p className="text-sm text-gray-600">
                ₹{item.productId.price} × {item.quantity}
              </p>
              <p className="text-md font-medium mt-1">
                Subtotal: ₹{calculateItemTotal(item)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <h2 className="text-xl font-bold">
          Total: ₹{totalPrice}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
