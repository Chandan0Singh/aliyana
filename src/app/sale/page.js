"use client";
import React from "react";
import bagsData from "../../data/bags";

const calculateDiscountedPrice = (price, sale) => {
  if (!sale) return price;
  const percentage = parseInt(sale.replace(/\[|\]|%/g, ""));
  const discounted = price - (price * percentage) / 100;
  return Math.floor(discounted);
};

const ShopPage = () => {
  return (
    <div className="flex ">
      <div className="w-[11rem]"></div>
      <div className=" bg-white px-6 py-10 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🛍️ Shop All Bags
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[65vh] overflow-auto pr-[2rem] custom-scrollbar h-[65vh] overflow-auto pr-[2rem] custom-scrollbar">
          {bagsData.map((bag) => {
            const discountedPrice = calculateDiscountedPrice(
              bag.price,
              bag.sale
            );
            return (
              <div
                key={bag.id}
                className="bg-gray-100 rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-700">
                  {bag.name}
                </h2>

                {bag.sale ? (
                  <div className="mt-1">
                    <p className="text-sm text-gray-500 line-through">
                      ₹{bag.price}
                    </p>
                    <p className="text-red-600 font-semibold">
                      ₹{discountedPrice}{" "}
                      <span className="text-xs text-green-600 ml-2">
                        {bag.sale} off
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-700 mt-1">₹{bag.price}</p>
                )}

                <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
