"use client";
import React from "react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#FDF4FF] text-[#1E1B4B] px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-8 sm:mb-10">
          👩‍💼 Careers at Aliyana
        </h1>

        <p className="text-base sm:text-lg leading-relaxed mb-8 text-center">
          At{" "}
          <span className="text-[#C084FC] font-semibold">Aliyana</span>, we’re
          building more than just handbags — we’re crafting a brand rooted in
          creativity, craftsmanship, and conscious fashion.
          <br className="hidden sm:block" />
          We're looking for passionate individuals to join our growing team.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Job Cards */}
          {[
            {
              title: "🎨 Product Designer",
              desc: "Help design our next collection of fashion-forward handbags.",
              bullets: [
                "Experience in fashion or accessories design",
                "Creative + trend-aware mindset",
                "Strong understanding of materials, colors & patterns",
              ],
              location: "Gurgaon / Remote",
            },
            {
              title: "📦 Operations Executive",
              desc: "Manage orders, inventory, and daily logistics across India.",
              bullets: [
                "Strong organizational skills",
                "Basic Excel knowledge",
                "Experience in eCommerce operations preferred",
              ],
              location: "Delhi NCR",
            },
            {
              title: "📱 Social Media Intern",
              desc: "Create reels, posts & help build our online community.",
              bullets: [
                "Good with Instagram & Canva",
                "Creative content ideas",
                "Love for fashion & storytelling",
              ],
              location: "Remote",
            },
            {
              title: "🛍️ Wholesale Sales Lead",
              desc: "Build B2B relationships with boutiques and distributors.",
              bullets: [
                "Experience in sales or fashion retail",
                "Strong communication & pitching skills",
                "Travel-friendly, incentive-based",
              ],
              location: "PAN India",
            },
          ].map((job, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-sm sm:text-md mb-3">{job.desc}</p>
              <ul className="list-disc list-inside text-sm mb-4">
                {job.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-500">Location: {job.location}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center px-2">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">📩 Interested?</h3>
          <p className="text-sm sm:text-md mb-3 sm:mb-4">
            Send your CV/portfolio to{" "}
            <a
              href="mailto:careers@aliyana.in"
              className="text-[#C084FC] underline"
            >
              careers@aliyana.in
            </a>{" "}
            — we’d love to hear from you!
          </p>
          <p className="text-xs sm:text-sm text-gray-500 italic">
            We're always open to fresh talent, interns, and creative minds 💡
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
