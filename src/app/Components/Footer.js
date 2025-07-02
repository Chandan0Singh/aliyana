
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FDF4FF] text-[#1E1B4B] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif tracking-widest mb-4">Aliyana</h2>
          <p className="text-[#4B5563] text-sm">
            Redefining luxury handbags with timeless elegance & modern design.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/women" className="hover:text-[#C084FC] transition">Women</Link>
            </li>
            <li>
              <Link href="/men" className="hover:text-[#C084FC] transition">Men</Link>
            </li>
            <li>
              <Link href="/newarrival" className="hover:text-[#C084FC] transition">New Arrivals</Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/OurStory" className="hover:text-[#C084FC] transition">Our Story</Link>
            </li>
            <li>
              <Link href="/Sustainability" className="hover:text-[#C084FC] transition">Sustainability</Link>
            </li>
            <li>
              <Link href="/CareGuide" className="hover:text-[#C084FC] transition">Care Guide</Link>
            </li>
            <li>
              <Link href="/Careers" className="hover:text-[#C084FC] transition">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4">Stay Connected</h3>
          <form className="flex flex-col space-y-2">
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

      {/* Bottom Bar */}
      <div className="border-t border-[#E5E7EB] mt-10 pt-6 text-sm text-[#6B7280] text-center">
        &copy; {new Date().getFullYear()} Aliyana — All rights reserved.
      </div>
    </footer>
  );
}

