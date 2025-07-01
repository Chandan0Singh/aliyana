'use client';

import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />
      <h2 className="text-lg font-semibold text-[#1E1B4B]">{product.name}</h2>
      <p className="text-[#C084FC] text-md font-medium mt-1">₹{product.price}</p>

      <Link href={`/products/${product.id}`} passHref>
        <button className="mt-4 w-full bg-[#C084FC] hover:bg-[#4C1D95] text-white py-2 rounded-full transition">
          View
        </button>
      </Link>
    </div>
  );
}
