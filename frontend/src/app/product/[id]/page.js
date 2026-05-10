'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import ReactImageMagnify from "react-image-magnify";
import BuyNowModal from '../../Components/BuyNow'
import CartBtn from '@/app/Components/cartBtn';

const ProductPage = () => {
  const { id } = useParams(); // ✅ Fix for params

  const [bag, setBag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBuyNowOpen , setIsBuyNowOpen] = useState(false);

  // ✅ Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setBag(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);


  if (loading) return <div className="p-10">Loading...</div>;
  if (!bag) return <div className="p-10">Product not found.</div>;

  return (
    <>
      <div className="min-h-screen bg-white px-6 py-10 text-[#1E1B4B] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex justify-center items-start">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: bag.name,
                  isFluidWidth: true,
                  src: bag.image, // 800×533 displayed responsively
                },
                largeImage: {
                  src: bag.image,
                  width: 1600,  // 2x of original width
                  height: 1066, // 2x of original height
                },
                enlargedImagePosition: "beside", // or 'over' for mobile fallback
                enlargedImageContainerDimensions: {
                  width: '200%', // makes zoom box bigger
                  height: '100%',
                },
                enlargedImageContainerStyle: {
                  zIndex: 50,
                  border: '1px solid #ddd',
                  borderRadius: '12px',
                  boxShadow: '0 0 12px rgba(0,0,0,0.15)',
                },
                lensStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
              }}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{bag.name}</h1>

            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">EPS</span>
              <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">AI</span>
              <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">PNG</span>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">tag1</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">tag2</span>
            </div>

            <p className="text-xl font-bold mb-2">₹{bag.price}</p>
            <p className="text-sm text-gray-600 mb-6">{bag.description}</p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsBuyNowOpen(true)}
                className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
              >
                Buy Now
              </button>

              <CartBtn bag={bag} />

            </div>
          </div>
        </div>

        <div className="mt-20 bg-gray-50 text-center py-10 rounded-xl">
          <p className="text-lg font-medium mb-4">
            Get up to <span className="text-yellow-500 font-bold">65% discount</span> on the purchase of full character set
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
            View Entire Library
          </button>
          <button className="bg-yellow-300 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
            Customize Character
          </button>
        </div>
      </div>
      {/* <BuyNowModal
        isOpen={isBuyNowOpen}
        onClose={() => setIsBuyNowOpen(false)}
        product={bag}
      /> */}
    </>
  );
};

export default ProductPage;
