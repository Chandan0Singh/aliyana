'use client'

import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <Link href={`/products/${product.id}`}>
        <button className="mt-3 bg-black text-white px-4 py-2 rounded">View</button>
      </Link>
    </div>
  )
}
