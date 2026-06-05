"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog/published");
        setBlogs(response.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getAllBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-[#FDF4FF] text-[#1E1B4B] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#7C3AED] mb-3">
            Aliyana Journal
          </p>

          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-5">
            Fashion Stories & Luxury Insights
          </h1>

          <p className="max-w-2xl mx-auto text-[#6B7280] leading-relaxed text-base md:text-lg">
            Explore fashion inspiration, luxury handbag trends, styling guides,
            and timeless stories curated by Aliyana.
          </p>
        </div>

        {/* Featured Blog */}
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl overflow-hidden shadow-sm mb-16">
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200&auto=format&fit=crop"
              alt="Featured Blog"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>

          <div className="p-8 md:p-12">
            <span className="inline-block text-xs uppercase tracking-widest bg-[#F3E8FF] text-[#7C3AED] px-3 py-1 rounded-full mb-4">
              Featured
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-5 leading-tight">
              The Rise of Elegant Minimal Luxury in Modern Fashion
            </h2>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              Minimal luxury is becoming the defining trend of modern fashion.
              Learn how premium accessories and timeless design are reshaping
              personal style.
            </p>

            <Link
              href="#"
              className="inline-block bg-[#7C3AED] hover:bg-[#5B21B6] text-white px-6 py-3 rounded-full transition"
            >
              Read Article
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold">
              Latest Articles
            </h3>

            <button className="border border-[#DDD6FE] px-5 py-2 rounded-full text-sm hover:bg-white transition">
              View All
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-widest text-[#7C3AED]">
                    <span>{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>

                  <h4 className="text-xl font-semibold mb-3 leading-snug">
                    {blog.title}
                  </h4>

                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                    {blog.description}
                  </p>

                  <Link
                    href={`/blog/${blog._id}`}
                    className="text-[#7C3AED] font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
