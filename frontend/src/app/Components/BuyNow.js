"use client";

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { Dialog } from "@headlessui/react";

const BuyNowModal = ({ isOpen, onClose, product }) => {
  const { user } = useAuth();

  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.put(
        "http://localhost:5000/api/user/update",
        {
          userId: user?._id,
          name: user?.name,
          phone,
          address,
        }
      );

      if (response.data.success) {
        alert("Order placed successfully!");
        onClose();
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center px-4 bg-black/40">

        <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-2xl font-bold text-[#1E1B4B]">
              Buy Now
            </Dialog.Title>

            <button
              onClick={onClose}
              className="text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>
          </div>

          {/* Logged In User Info */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="font-semibold text-lg">
              {user?.name}
            </p>

            <p className="text-sm text-gray-500">
              {user?.email}
            </p>
          </div>

          {/* Product Preview */}
          <div className="flex gap-4 bg-gray-50 p-4 rounded-xl mb-6">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-24 h-24 rounded-lg object-cover border"
            />

            <div>
              <h2 className="font-semibold text-lg">
                {product?.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Digital Product
              </p>

              <p className="text-xl font-bold text-yellow-600 mt-2">
                ₹{product?.price}
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>

              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address
              </label>

              <textarea
                required
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter delivery address"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Total */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{product?.price}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">

              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition disabled:opacity-60"
              >
                {loading ? "Processing..." : "Confirm Order"}
              </button>

            </div>
          </form>

        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default BuyNowModal;