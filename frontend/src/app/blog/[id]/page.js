"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  CalendarDays,
  Eye,
  User2,
  ArrowLeft,
  Clock3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function BlogDetailsPage() {
  const params = useParams();
  const { id } = params;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleBlog = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/blog/${id}?track=true`,
      );

      setBlog(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF4FF] flex items-center justify-center">
        <div className="text-[#1E1B4B] text-xl font-medium animate-pulse">
          Loading article...
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FDF4FF] flex items-center justify-center">
        <div className="text-red-500 text-xl font-semibold">Blog not found</div>
      </div>
    );
  }

  return (
    <main className="bg-[#FDF4FF] min-h-screen pb-20">
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <img
          src={`http://localhost:5000${blog.featuredImage}`}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full text-white">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mb-6 text-sm uppercase tracking-[0.2em] hover:opacity-80 transition"
            >
              <ArrowLeft size={16} />
              Back to Blogs
            </Link>

            <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs uppercase tracking-[0.3em]">
              {blog.category}
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mt-6 max-w-5xl">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <User2 size={16} />
                {blog.author}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                {new Date(blog.createdAt).toDateString()}
              </div>

              <div className="flex items-center gap-2">
                <Eye size={16} />
                {blog.views} Views
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />5 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
          {/* LEFT CONTENT */}
          <div>
            {/* Description */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-[#F3E8FF] mb-10">
              <p className="text-xl md:text-2xl leading-relaxed text-[#4B5563] font-light">
                {blog.description}
              </p>
            </div>

            {/* BLOG CONTENT */}
            <article className="bg-white rounded-[2rem] p-8 md:p-14 shadow-sm border border-[#F3E8FF]">
              <div
                className="
                  prose 
                  prose-lg 
                  max-w-none
                  prose-headings:font-serif
                  prose-headings:text-[#1E1B4B]
                  prose-headings:font-bold
                  prose-p:text-[#4B5563]
                  prose-p:leading-8
                  prose-p:text-[17px]
                  prose-img:rounded-[1.8rem]
                  prose-img:shadow-md
                  prose-img:my-10
                  prose-li:text-[#4B5563]
                  prose-strong:text-[#111827]
                  prose-a:text-[#7C3AED]
                "
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            {/* CTA */}
            <div className="mt-12 bg-[#1E1B4B] text-white rounded-[2rem] p-10 text-center">
              <p className="uppercase tracking-[0.3em] text-xs mb-4 text-gray-300">
                Aliyana Journal
              </p>

              <h3 className="text-3xl md:text-4xl font-serif mb-4">
                Discover More Luxury Stories
              </h3>

              <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Explore fashion insights, premium styling inspiration, timeless
                trends, and luxury lifestyle stories curated by Aliyana.
              </p>

              <Link
                href="/blog"
                className="inline-block bg-white text-[#1E1B4B] px-8 py-3 rounded-full font-medium hover:scale-105 transition"
              >
                Explore Blogs
              </Link>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block sticky top-10">
            {/* Author Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#F3E8FF] mb-6">
              <p className="uppercase tracking-[0.3em] text-xs text-[#7C3AED] mb-5">
                Author
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#E9D5FF] flex items-center justify-center text-[#7C3AED] text-2xl font-bold">
                  C
                </div>

                <div>
                  <h4 className="font-semibold text-[#1E1B4B] text-lg">
                    {blog.author}
                  </h4>

                  <p className="text-sm text-[#6B7280]">
                    Luxury Fashion Writer
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F3E8FF]">
                <p className="text-[#6B7280] leading-relaxed text-sm">
                  Sharing insights on luxury handbags, modern fashion trends,
                  and timeless styling inspiration.
                </p>
              </div>
            </div>

            {/* Blog Stats */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#F3E8FF] mb-6">
              <p className="uppercase tracking-[0.3em] text-xs text-[#7C3AED] mb-6">
                Article Insights
              </p>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Views</span>
                  <span className="font-semibold text-[#1E1B4B]">
                    {blog.views}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Category</span>
                  <span className="font-semibold text-[#1E1B4B]">
                    {blog.category}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Reading Time</span>
                  <span className="font-semibold text-[#1E1B4B]">
                    5 Minutes
                  </span>
                </div>
              </div>
            </div>

            {/* Static Card */}
            <div className="bg-[#1E1B4B] text-white rounded-[2rem] p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 opacity-10">
                <Sparkles size={120} />
              </div>

              <p className="uppercase tracking-[0.3em] text-xs text-gray-300 mb-4 relative z-10">
                Fashion Journal
              </p>

              <h3 className="text-3xl font-serif mb-5 relative z-10 leading-tight">
                Timeless Luxury Never Goes Out of Style
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                Discover curated stories around luxury fashion, premium
                handbags, and elegant modern styling.
              </p>

              <Link
                href="/blog"
                className="inline-block bg-white text-[#1E1B4B] px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition relative z-10"
              >
                Explore More
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
