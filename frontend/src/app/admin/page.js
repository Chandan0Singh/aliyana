'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:5000/api/products');
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <Link href="/admin/add-product">
          <button className="bg-green-600 text-white px-4 py-2 rounded">+ Add Product</button>
        </Link>
      </div>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Age</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-t">
              <td className="p-2"><img src={p.image} className="w-16 h-16 object-cover" /></td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">₹{p.price}</td>
              <td className="p-2">{p.gender}</td>
              <td className="p-2">{p.age}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <Link href={`/admin/edit/${p._id}`}>
                    <button className="bg-yellow-500 px-2 py-1 text-white rounded">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-600 px-2 py-1 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
