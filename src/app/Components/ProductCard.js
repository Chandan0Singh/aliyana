"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300">
      {/* Optimized Image */}
      <div className="relative w-full h-52 mb-4 rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h2 className="text-lg font-semibold text-[#1E1B4B]">{product.name}</h2>
      <p className="text-[#C084FC] text-md font-medium mt-1">₹{product.price}</p>

      <Link href={`/products/${product.id}`} className="block mt-4">
        <button className="w-full bg-[#C084FC] hover:bg-[#4C1D95] text-white py-2 rounded-full transition">
          View
        </button>
      </Link>
    </div>
  );
}
