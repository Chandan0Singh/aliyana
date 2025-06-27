// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif tracking-widest mb-4">Aliyana</h2>
          <p className="text-gray-400 text-sm">
            Redefining luxury handbags with timeless elegance & modern design.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/women">Women</Link>
            </li>
            <li>
              <Link href="/men">Men</Link>
            </li>
            <li>
              <Link href="newarrival">New Arrivals</Link>
            </li>
            {/* <li>
              <Link href="">Best Sellers</Link>
            </li> */}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#">Our Story</Link>
            </li>
            <li>
              <Link href="#">Sustainability</Link>
            </li>
            <li>
              <Link href="#">Care Guide</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4">
            Stay Connected
          </h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 text-sm uppercase hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Aliyana — All rights reserved.
      </div>
    </footer>
  );
}
