// "use client";
// import { FaSearch, FaTags } from "react-icons/fa";
// import { useState } from "react";

// export default function SearchBar({ placeholder = "Start your search", onSearch }) {
//   const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(input); // Pass input to parent
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full flex justify-center mt-6">
//       <div className="flex items-center bg-yellow-400 rounded-full p-1 shadow-md max-w-2xl w-full">
//         <button type="button" className="flex items-center px-4 py-2 bg-yellow-500 rounded-full text-white font-semibold">
//           <FaTags className="mr-2" />
//           All Assets
//         </button>

//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder={placeholder}
//           className="flex-grow px-4 py-2 bg-white rounded-full text-gray-700 focus:outline-none"
//         />

//         <button
//           type="submit"
//           className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full"
//         >
//           <FaSearch className="mr-2" />
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }


"use client";
import { FaSearch, FaTags } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar({ placeholder = "Start your search", onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input); // Pass input to parent
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center mt-8">
      <div className="flex items-center bg-white rounded-full p-1 shadow-lg border border-[#E5E7EB] max-w-2xl w-full">
        {/* Tag Button */}
        <button
          type="button"
          className="flex items-center px-4 py-2 bg-[#F3E8FF] text-[#4C1D95] font-medium rounded-full hover:bg-[#E9D5FF] transition"
        >
          <FaTags className="mr-2" />
          All Assets
        </button>

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-grow px-4 py-2 bg-transparent text-[#1E1B4B] placeholder-gray-400 focus:outline-none"
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
