"use client";
import React from "react";

const CareGuide = () => {
  return (
    <div className="min-h-screen bg-[#FDF4FF] text-[#1E1B4B] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center mb-10">
          🧼 Bag Care Guide
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Your <span className="text-[#C084FC] font-semibold">Aliyana</span> bag
          is made to last — with a little care, it will stay beautiful for years.
          Here's how to keep it in its best shape:
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🧽 Cleaning Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Use a soft, damp cloth to wipe the surface gently.</li>
          <li>
            For stains, use mild soap diluted in water. Avoid harsh chemicals or bleach.
          </li>
          <li>
            Never soak your bag in water. Spot clean only.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📦 Storage Advice</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Keep your bag in a dust bag when not in use.</li>
          <li>Stuff it with tissue paper to retain shape.</li>
          <li>Store in a cool, dry place away from direct sunlight.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🚫 Things to Avoid</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Avoid overloading — it can stretch or damage the handles.</li>
          <li>Don’t use hair dryers or heaters to dry wet bags.</li>
          <li>Keep away from sharp objects and rough surfaces.</li>
        </ul>

        <p className="text-lg mt-8">
          With the right care, your bag will age gracefully and continue to make
          a statement — every time you carry it. 💜
        </p>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 italic">
            Have a question? <br />
            Contact our care team anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareGuide;
