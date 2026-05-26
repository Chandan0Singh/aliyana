"use client";

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { Dialog } from "@headlessui/react";

const BuyNowModal = ({ isOpen, onClose, product }) => {
  const { user } = useAuth();

  console.log("user", user);

  const [phone, setPhone] = useState(user?.user?.phone || "");
  const [address, setAddress] = useState(user?.user?.address || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.put(
        "http://localhost:5000/api/user/update",
        {
          userId: user?.user?.id,
          name: user?.user?.name,
          phone,
          address,
        },
      );

      const orderResponse = await axios.post(
        "http://localhost:5000/api/order/create",
        {
          userId: user?.user?.id,
          productId: product?._id,
          amount: product?.price,
          phone,
          address,
          paymentStatus: "Pending",
          orderStatus: "Placed",
        },
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
      className="fixed inset-0 z-[100] overflow-y-auto"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-[#1E1B4B]/40 backdrop-blur-sm" />

      {/* Modal Wrapper */}
      <div className="flex min-h-screen items-center justify-center px-4 py-8">
        <Dialog.Panel className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-[#FFFFFF] shadow-2xl border border-[#E9D5FF]">
          {/* Accent Line */}
          <div className="h-2 bg-gradient-to-r from-[#C084FC] to-[#A855F7]" />

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <Dialog.Title className="text-3xl md:text-4xl font-serif font-bold text-[#1E1B4B] leading-relaxed">
                  Complete Your Order
                </Dialog.Title>

                <p className="text-sm text-gray-500 mt-1">
                  Secure checkout with instant confirmation
                </p>
              </div>

              <button
                onClick={onClose}
                className="h-11 w-11 rounded-full bg-[#F3E8FF] text-[#7E22CE] hover:bg-[#E9D5FF] transition flex items-center justify-center text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* User Card */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-[#FAF5FF] to-[#F3E8FF] border border-[#E9D5FF] rounded-[24px] p-5 mb-6">
              {/* Avatar */}
              <div className="h-16 w-16 rounded-full bg-[#C084FC] text-white flex items-center justify-center text-2xl font-bold uppercase shadow-lg shadow-purple-200">
                {user?.user?.name?.charAt(0)}
              </div>

              {/* User Info */}
              <div>
                <h2 className="text-xl font-serif font-bold text-[#1E1B4B]">
                  {user?.user?.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {user?.user?.email}
                </p>
              </div>
            </div>

            {/* Product Card */}
            <div className="bg-white border border-[#E9D5FF] rounded-[28px] p-5 shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-5">
                {/* Product Image */}
                <div className="bg-[#FAF5FF] rounded-[24px] p-3 border border-[#F3E8FF]">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-full md:w-36 h-36 rounded-[20px] object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1E1B4B]">
                      {product?.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                      Premium quality digital asset crafted for creators,
                      designers, and commercial projects.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="bg-[#F3E8FF] text-[#7E22CE] text-xs px-4 py-2 rounded-full font-medium">
                      Instant Download
                    </span>

                    <span className="bg-[#F5F3FF] text-[#6D28D9] text-xs px-4 py-2 rounded-full font-medium">
                      Commercial Use
                    </span>

                    <span className="bg-[#FDF2F8] text-[#BE185D] text-xs px-4 py-2 rounded-full font-medium">
                      Premium Quality
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-5 flex items-center gap-4">
                    <p className="text-4xl font-serif font-bold text-[#A855F7]">
                      ₹{product?.price}
                    </p>

                    <span className="line-through text-gray-400 text-lg">
                      ₹{Number(product?.price) + 999}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#1E1B4B] mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-[#E9D5FF] bg-[#FAF5FF] px-5 py-4 text-[#1E1B4B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C084FC] transition"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-[#1E1B4B] mb-2">
                  Delivery Address
                </label>

                <textarea
                  required
                  rows={4}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full delivery address"
                  className="w-full rounded-2xl border border-[#E9D5FF] bg-[#FAF5FF] px-5 py-4 text-[#1E1B4B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C084FC] transition resize-none"
                />
              </div>

              {/* Price Summary */}
              <div className="rounded-[28px] bg-gradient-to-r from-[#FAF5FF] to-[#F3E8FF] border border-[#E9D5FF] p-6">
                <div className="flex items-center justify-between text-lg mb-3">
                  <span className="text-gray-600">Product Price</span>

                  <span className="font-semibold text-[#1E1B4B]">
                    ₹{product?.price}
                  </span>
                </div>

                <div className="flex items-center justify-between text-lg mb-4">
                  <span className="text-gray-600">Platform Fee</span>

                  <span className="font-semibold text-green-600">Free</span>
                </div>

                <div className="border-t border-[#D8B4FE] pt-4 flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-[#1E1B4B]">
                    Total
                  </span>

                  <span className="text-4xl font-serif font-bold text-[#A855F7]">
                    ₹{product?.price}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-2xl border border-[#D8B4FE] bg-white py-4 font-medium text-[#7E22CE] hover:bg-[#FAF5FF] transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-2xl bg-[#C084FC] py-4 font-semibold text-white hover:bg-[#A855F7] transition disabled:opacity-60 shadow-xl shadow-purple-200/50"
                >
                  {loading ? "Processing..." : "Confirm Order"}
                </button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default BuyNowModal;
