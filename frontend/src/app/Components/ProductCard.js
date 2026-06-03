"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import CartBtn from "./cartBtn";

const ProductCard = ({ bag }) => {
  const router = useRouter();

  const handleView = () => {
    router.push(`/product/${bag._id}`);
  };

  const getDiscountedPrice = () => {
    if (!bag.sale) return bag.price;

    const discount =
      parseInt(
        String(bag.sale).replace(/\[|\]|%/g, "")
      ) || 0;

    return Math.floor(
      bag.price - (bag.price * discount) / 100
    );
  };

  const finalPrice = getDiscountedPrice();

  return (
    <div
      className="
        group
        relative
        bg-white
        rounded-[32px]
        overflow-hidden
        border
        border-[#F3E8FF]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      "
    >
      {/* Sale Badge */}
      {bag.sale && (
        <div className="absolute top-4 left-4 z-20">
          <span
            className="
              px-3
              py-1.5
              rounded-full
              bg-[#C084FC]
              text-white
              text-xs
              font-medium
              shadow-md
            "
          >
            {bag.sale} OFF
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden bg-[#FAF5FF]">
        <img
          src={bag.image}
          alt={bag.title}
          className="
            w-full
            h-[340px]
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/10
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2
          className="
            text-lg
            font-medium
            text-[#1E1B4B]
            leading-relaxed
            line-clamp-2
            min-h-[56px]
          "
        >
          {bag.title}
        </h2>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-[#1E1B4B]">
            ₹{finalPrice}
          </span>

          {bag.sale && (
            <span className="text-sm text-gray-400 line-through">
              ₹{bag.price}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F3E8FF] my-5" />

        {/* Buttons */}
        <div className="flex gap-3">

          <div className="flex-1">
            <CartBtn bag={bag} />
          </div>

          <button
            onClick={handleView}
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-[#C084FC]
              text-[#C084FC]
              py-3
              font-medium
              transition-all
              duration-300
              hover:bg-[#C084FC]
              hover:text-white
            "
          >
            View
            <FaArrowRight
              className="
                text-xs
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;