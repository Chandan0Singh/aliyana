'use client';
import { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    gender: "",
    category: "",
    isSale: false,
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/products/add", form);
      alert("✅ Product added!");
    } catch (err) {
      console.error(err);
      alert("❌ Error while adding product.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6">🆕 Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            name="title"
            placeholder="Product title"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Product description"
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Price (₹)</label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Gender</label>
            <input
              name="gender"
              placeholder="Male / Female / Unisex"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            name="category"
            placeholder="Category"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          {/* 👇 Image Preview */}
          {form.imageUrl && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">🔍 Preview:</p>
              <img
                src={form.imageUrl}
                alt="Preview"
                className="w-48 h-auto border rounded shadow"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isSale"
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-sm font-medium">Is on Sale?</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition duration-200"
        >
          ➕ Add Product
        </button>
      </form>
    </div>
  );
}
