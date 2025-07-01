import React from "react";

const PriceFilter = ({ priceRanges, selectedRange, onChange }) => {
  return (
    <aside className="w-[12rem] py-6 px-4 bg-white rounded-xl shadow-md h-fit">
      <h2 className="text-xl font-heading text-[#1E1B4B] mb-4">
        Filter by Price
      </h2>
      <div className="space-y-3">
        {priceRanges.map((range) => (
          <label
            key={range.label}
            className={`flex items-center gap-3 cursor-pointer select-none text-sm transition ${
              selectedRange?.label === range.label
                ? "text-[#4C1D95] font-medium"
                : "text-[#4B5563] hover:text-[#1E1B4B]"
            }`}
          >
            <input
              type="checkbox"
              checked={selectedRange?.label === range.label}
              onChange={() => onChange(range)}
              className="h-4 w-4 rounded-sm border-gray-300 focus:ring-1 focus:ring-[#C084FC] text-[#C084FC] accent-[#C084FC] cursor-pointer"
            />
            {range.label}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default PriceFilter;
