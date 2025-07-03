'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) =>
    setOpenSection(openSection === section ? null : section);

  return (
    <footer className="bg-[#FDF4FF] text-[#1E1B4B] py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif tracking-widest mb-2">Aliyana</h2>
          <p className="text-[#4B5563] text-sm leading-relaxed max-w-md">
            Redefining luxury handbags with timeless elegance & modern design.
          </p>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-4 md:flex md:space-y-0 md:justify-between">
          {/* Shop */}
          <div className="md:w-1/3">
            <div
              onClick={() => toggleSection('shop')}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <h3 className="uppercase text-sm font-semibold">Shop</h3>
              <span className="md:hidden">
                {openSection === 'shop' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <ul
              className={`mt-2 space-y-2 text-sm ${
                openSection === 'shop' || typeof window === 'undefined' ? '' : 'hidden md:block'
              }`}
            >
              <li>
                <Link href="/women" className="hover:text-[#C084FC] transition">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/men" className="hover:text-[#C084FC] transition">
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/newarrival"
                  className="hover:text-[#C084FC] transition"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="md:w-1/3">
            <div
              onClick={() => toggleSection('about')}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <h3 className="uppercase text-sm font-semibold">About</h3>
              <span className="md:hidden">
                {openSection === 'about' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <ul
              className={`mt-2 space-y-2 text-sm ${
                openSection === 'about' || typeof window === 'undefined' ? '' : 'hidden md:block'
              }`}
            >
              <li>
                <Link href="/OurStory" className="hover:text-[#C084FC] transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/Sustainability" className="hover:text-[#C084FC] transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/CareGuide" className="hover:text-[#C084FC] transition">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link href="/Careers" className="hover:text-[#C084FC] transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/3">
            <div
              onClick={() => toggleSection('newsletter')}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <h3 className="uppercase text-sm font-semibold">Stay Connected</h3>
              <span className="md:hidden">
                {openSection === 'newsletter' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            <div
              className={`mt-3 ${
                openSection === 'newsletter' || typeof window === 'undefined' ? '' : 'hidden md:block'
              }`}
            >
              <form className="flex flex-col gap-3 max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 border border-[#E5E7EB] bg-white text-sm text-[#1E1B4B] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C084FC] rounded"
                />
                <button
                  type="submit"
                  className="bg-[#C084FC] hover:bg-[#4C1D95] text-white px-4 py-2 text-sm uppercase rounded transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E7EB] pt-6 text-sm text-[#6B7280] text-center">
          &copy; {new Date().getFullYear()} Aliyana — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
