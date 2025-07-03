import React from "react";

const PriceFilter = ({ priceRanges, selectedRange, onChange }) => {
  return (
    <aside className="w-full md:w-[12rem] py-6 px-4 bg-white rounded-xl shadow-md h-fit">
      <h2 className="text-xl font-heading text-[#1E1B4B] mb-4">
        Filter by Price
      </h2>

      <div className="space-y-3">
        {priceRanges.map((range) => {
          const isSelected = selectedRange?.label === range.label;

          return (
            <label
              key={range.label}
              className={`flex items-center gap-3 cursor-pointer text-sm select-none transition-all ${
                isSelected
                  ? "text-[#4C1D95] font-semibold"
                  : "text-[#4B5563] hover:text-[#1E1B4B]"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onChange(range)}
                className="h-4 w-4 text-[#C084FC] border-gray-300 focus:ring-[#C084FC] cursor-pointer"
                aria-checked={isSelected}
              />
              <span>{range.label}</span>
            </label>
          );
        })}
      </div>
    </aside>
  );
};

export default PriceFilter;
