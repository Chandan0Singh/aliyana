'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import ReactImageMagnify from "react-image-magnify";
import BuyNowModal from '../../Components/BuyNow';
import CartBtn from '@/app/Components/cartBtn';

const ProductPage = () => {
  const { id } = useParams();

  const [bag, setBag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );

        setBag(res.data);

      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF4FF]">
        <p className="text-xl font-medium text-[#1E1B4B]">
          Loading Product...
        </p>
      </div>
    );
  }

  if (!bag) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF4FF]">
        <p className="text-xl font-medium text-[#1E1B4B]">
          Product not found.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#FDF4FF] py-12 px-4 md:px-8 text-[#1E1B4B]">

        <div className="max-w-7xl mx-auto">

          {/* Main Product Card */}
          <div className="bg-[#FFFFFF] rounded-[32px] shadow-xl border border-purple-100 overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-10">

              {/* Left Side */}
              <div>

                {/* Product Badge */}
                <div className="mb-5">
                  <span className="bg-[#F3E8FF] text-[#7E22CE] px-4 py-2 rounded-full text-sm font-medium">
                    Premium Digital Asset
                  </span>
                </div>

                {/* Image Container */}
                <div className="bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF] rounded-[28px] p-6 border border-[#E9D5FF]">

                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: bag.name,
                        isFluidWidth: true,
                        src: bag.image,
                      },

                      largeImage: {
                        src: bag.image,
                        width: 1600,
                        height: 1066,
                      },

                      enlargedImagePosition: "beside",

                      enlargedImageContainerDimensions: {
                        width: '180%',
                        height: '100%',
                      },

                      enlargedImageContainerStyle: {
                        zIndex: 50,
                        border: '1px solid #E9D5FF',
                        borderRadius: '24px',
                        background: '#fff',
                        boxShadow: '0 20px 40px rgba(192,132,252,0.2)',
                      },

                      lensStyle: {
                        backgroundColor: 'rgba(192,132,252,0.2)',
                      },
                    }}
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col justify-center">

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold leading-relaxed text-[#1E1B4B] mb-5">
                  {bag.name}
                </h1>

                {/* Description */}
                <p className="text-lg leading-relaxed text-[#4B5563] mb-8">
                  {bag.description}
                </p>

                {/* File Formats */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {["EPS", "AI", "PNG", "SVG"].map((item) => (
                    <span
                      key={item}
                      className="bg-[#F3E8FF] text-[#7E22CE] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {["Character", "Illustration", "Premium"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white border border-[#E9D5FF] text-[#6B21A8] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}

                </div>

                {/* Price */}
                <div className="mb-8">

                  <div className="flex items-center gap-4">

                    <h2 className="text-5xl font-serif font-bold text-[#A855F7]">
                      ₹{bag.price}
                    </h2>

                    <span className="line-through text-gray-400 text-2xl">
                      ₹{Number(bag.price) + 999}
                    </span>

                  </div>

                  <p className="text-sm text-[#7E22CE] mt-2 font-medium">
                    Save ₹999 on today’s purchase
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                  <button
                    onClick={() => setIsBuyNowOpen(true)}
                    className="flex-1 min-w-[220px] bg-[#C084FC] hover:bg-[#A855F7] text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl shadow-purple-200/50 hover:scale-[1.02]"
                  >
                    Buy Now
                  </button>

                  <div className="flex-1 min-w-[220px]">
                    <CartBtn bag={bag} />
                  </div>

                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

                  <div className="bg-[#FFFFFF] border border-[#E9D5FF] rounded-2xl p-5">
                    <h3 className="text-xl font-serif font-bold text-[#1E1B4B]">
                      Instant Access
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      Download your files immediately after purchase.
                    </p>
                  </div>

                  <div className="bg-[#FFFFFF] border border-[#E9D5FF] rounded-2xl p-5">
                    <h3 className="text-xl font-serif font-bold text-[#1E1B4B]">
                      Commercial License
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      Use assets in commercial and personal projects.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 bg-gradient-to-r from-[#C084FC] to-[#A855F7] rounded-[32px] p-10 text-center shadow-xl">

            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Unlock Full Character Library
            </h2>

            <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Get up to 65% discount on complete character collections
              and premium illustration bundles crafted for creators.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <button className="bg-white text-[#7E22CE] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                View Entire Library
              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition">
                Customize Character
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Buy Now Modal */}
      <BuyNowModal
        isOpen={isBuyNowOpen}
        onClose={() => setIsBuyNowOpen(false)}
        product={bag}
      />
    </>
  );
};

export default ProductPage;