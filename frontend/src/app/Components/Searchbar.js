"use client";

import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function SearchBar({
  placeholder = "Search luxury bags...",
  onSearch = () => {},
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(input.trim());
    }, 300);

    return () => clearTimeout(debounce);
  }, [input, onSearch]);

  return (
    <div className="w-full">
      <div className="relative">

        {/* Search Icon */}
        <FaSearch
          className="
            absolute
            left-6
            top-1/2
            -translate-y-1/2
            text-[#C084FC]
            text-lg
          "
        />

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="
            w-full
            h-16
            pl-14
            pr-6
            rounded-3xl
            bg-white
            border
            border-[#F3E8FF]
            text-[#1E1B4B]
            placeholder:text-gray-400
            text-base
            shadow-sm
            transition-all
            duration-300
            focus:outline-none
            focus:border-[#C084FC]
            focus:ring-4
            focus:ring-purple-100
          "
        />

      </div>
    </div>
  );
}