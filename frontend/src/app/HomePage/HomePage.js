"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeBody() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] sm:h-[90vh] w-full overflow-hidden bg-[#FDF4FF]">
        <video
          className="h-full w-auto absolute right-[-20vw] object-cover"
          src="/aliyanahead.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="z-10 relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-[3rem] sm:text-[5rem] md:text-[7rem] leading-none font-serif font-bold tracking-widest text-[#1E1B4B]">
            Aliyana
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#1E1B4B]">Aliyana Luxe</p>
          <button className="mt-6 px-6 py-2 bg-[#C084FC] text-white uppercase text-sm rounded-full hover:bg-[#4C1D95] transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1B4B] font-semibold mb-4">
              Timeless Elegance
            </h2>
            <p className="text-gray-600 mb-6">
              Discover our handcrafted luxury handbags, designed to elevate your
              everyday.
            </p>
            <Link
              href="/collection"
              className="text-[#C084FC] font-medium hover:underline"
            >
              Explore Collection
            </Link>
          </div>
          <div className="relative w-full aspect-[3/2] max-h-[300px] sm:max-h-none">
            <Image
              src="/home-domey-Image.jpeg"
              alt="Handbag"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Collection Showcase */}
      <div className="grid sm:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
        {["GG Classic Tote", "Marmont Mini Crossbody"].map((label, idx) => (
          <div key={idx} className="relative aspect-[3/2] w-full">
            <Image
              src="/home-domey-Image.jpeg"
              alt={label}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black text-sm font-medium shadow rounded">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#F3E8FF] mt-20 px-4 sm:px-6 py-16 text-center rounded-xl shadow-inner mx-4 sm:mx-auto max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-serif text-[#1E1B4B] mb-4">
          Get Exclusive Updates
        </h3>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Join our newsletter and stay updated on new drops, offers & more.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full sm:flex-1 border border-gray-300 focus:outline-none rounded-md"
          />
          <button className="px-6 py-2 bg-[#C084FC] text-white uppercase text-sm rounded-full hover:bg-[#4C1D95]">
            Subscribe
          </button>
        </form>
      </div>

      {/* Services Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl text-[#695757] font-serif font-semibold mb-12">
            Aliyana Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {["Custom Engraving", "Private Session", "In-store Pickup"].map(
              (title, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-full aspect-[3/2] mb-4 overflow-hidden rounded-xl shadow">
                    <Image
                      src="/home-domey-Image.jpeg"
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1E1B4B] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {title === "Custom Engraving"
                      ? "Personalize select leather goods and accessories with initials or symbols that reflect your style."
                      : title === "Private Session"
                      ? "Schedule an exclusive appointment with our stylists and explore curated collections in a calm, luxe setting."
                      : "Shop online and collect your order at a nearby boutique — quick, secure and complimentary."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
