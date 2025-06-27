import React from "react";

const PriceFilter = ({ priceRanges, selectedRange, onChange }) => {
  return (
    <div className="w-[11rem] pt-10">
      <h2 className="text-xl font-semibold mb-4">Filter by Price</h2>
      <div className="space-y-3">
        {priceRanges.map((range) => (
          <label
            key={range.label}
            className="flex items-center gap-3 cursor-pointer select-none text-gray-800 hover:text-black transition"
          >
            <input
              type="checkbox"
              checked={selectedRange?.label === range.label}
              onChange={() => onChange(range)}
              className="h-4 w-4 rounded-sm border-gray-300 text-black focus:ring-1 focus:ring-black cursor-pointer accent-black"
            />
            <span className="text-sm">{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
