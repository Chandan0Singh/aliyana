"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogDetailsPage() {
  const params = useParams();
  const { id } = params;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleBlog = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/blog/${id}`
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
      <div className="min-h-screen flex items-center justify-center text-[#1E1B4B]">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Blog not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDF4FF] py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        
        {/* Featured Image */}
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-[400px] object-cover"
        />

        {/* Content */}
        <div className="p-8 md:p-12">
          
          {/* Category */}
          <span className="inline-block bg-[#F3E8FF] text-[#7C3AED] text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-serif font-bold text-[#1E1B4B] mb-4 leading-tight">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
            {blog.description}
          </p>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#1E1B4B] prose-p:text-[#4B5563]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </main>
  );
}