"use client";
import { FaSearch, FaTags } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar({
  placeholder = "Start your search",
  onSearch = () => {},
  tagLabel = "All Assets",
  showTagButton = true,
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center mt-6 sm:mt-8 px-2"
    >
      <div className="flex items-center bg-white rounded-full p-1 shadow-lg border border-[#E5E7EB] w-full max-w-2xl">
        {/* Tag Button */}
        {showTagButton && (
          <button
            type="button"
            className="hidden sm:flex items-center px-4 py-2 bg-[#F3E8FF] text-[#4C1D95] font-medium rounded-full hover:bg-[#E9D5FF] transition whitespace-nowrap"
            tabIndex={-1}
          >
            <FaTags className="mr-2" />
            {tagLabel}
          </button>
        )}

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-grow px-4 py-2 text-[#1E1B4B] placeholder-gray-400 bg-transparent focus:outline-none"
          aria-label="Search input"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center bg-[#C084FC] hover:bg-[#4C1D95] text-white px-4 py-2 rounded-full transition"
        >
          <FaSearch className="mr-2" />
          Search
        </button>
      </div>
    </form>
  );
}
