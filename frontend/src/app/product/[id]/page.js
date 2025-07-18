// src/app/product/[id]/page.js
import React from "react";
import axios from "axios";

const ProductPage = async ({ params }) => {
  const { id } = params;

  // Fetch product by ID
  const res = await axios.get(`http://localhost:5000/api/products/${id}`);
  const bag = res.data;

  return (
    <div className="min-h-screen px-4 py-10 text-[#1E1B4B]">
      <h1 className="text-3xl font-bold mb-6">{bag.name}</h1>
      <img
        src={bag.image}
        alt={bag.name}
        className="w-full max-w-md object-cover rounded-xl mb-4"
      />
      <p className="text-xl font-semibold">₹{bag.price}</p>
      <p className="text-sm text-gray-700 mt-2">{bag.description}</p>
    </div>
  );
};

export default ProductPage;
