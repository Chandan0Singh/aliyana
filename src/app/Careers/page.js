"use client";
import React from "react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#FDF4FF] text-[#1E1B4B] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold font-serif text-center mb-10">
          👩‍💼 Careers at Aliyana
        </h1>

        <p className="text-lg leading-relaxed mb-8 text-center">
          At <span className="text-[#C084FC] font-semibold">Aliyana</span>, we’re
          building more than just handbags — we’re crafting a brand rooted in
          creativity, craftsmanship, and conscious fashion.
          <br />
          We're looking for passionate individuals to join our growing team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Job 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">🎨 Product Designer</h2>
            <p className="text-md mb-3">
              Help design our next collection of fashion-forward handbags.
            </p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Experience in fashion or accessories design</li>
              <li>Creative + trend-aware mindset</li>
              <li>Strong understanding of materials, colors & patterns</li>
            </ul>
            <p className="text-sm italic text-gray-500">
              Location: Gurgaon / Remote
            </p>
          </div>

          {/* Job 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">📦 Operations Executive</h2>
            <p className="text-md mb-3">
              Manage orders, inventory, and daily logistics across India.
            </p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Strong organizational skills</li>
              <li>Basic Excel knowledge</li>
              <li>Experience in eCommerce operations preferred</li>
            </ul>
            <p className="text-sm italic text-gray-500">
              Location: Delhi NCR
            </p>
          </div>

          {/* Job 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">📱 Social Media Intern</h2>
            <p className="text-md mb-3">
              Create reels, posts & help build our online community.
            </p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Good with Instagram & Canva</li>
              <li>Creative content ideas</li>
              <li>Love for fashion & storytelling</li>
            </ul>
            <p className="text-sm italic text-gray-500">Location: Remote</p>
          </div>

          {/* Job 4 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">🛍️ Wholesale Sales Lead</h2>
            <p className="text-md mb-3">
              Build B2B relationships with boutiques and distributors.
            </p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Experience in sales or fashion retail</li>
              <li>Strong communication & pitching skills</li>
              <li>Travel-friendly, incentive-based</li>
            </ul>
            <p className="text-sm italic text-gray-500">Location: PAN India</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">📩 Interested?</h3>
          <p className="text-md mb-4">
            Send your CV/portfolio to{" "}
            <a
              href="mailto:careers@aliyana.in"
              className="text-[#C084FC] underline"
            >
              careers@aliyana.in
            </a>{" "}
            — we’d love to hear from you!
          </p>
          <p className="text-sm text-gray-500 italic">
            We're always open to fresh talent, interns, and creative minds 💡
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
