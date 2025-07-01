// // components/Footer.js
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className=" text-white py-12 px-6 bg-[#FDF4FF]">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Brand */}
//         <div>
//           <h2 className="text-3xl font-serif tracking-widest mb-4">Aliyana</h2>
//           <p className="text-gray-400 text-sm">
//             Redefining luxury handbags with timeless elegance & modern design.
//           </p>
//         </div>

//         {/* Shop Links */}
//         <div className="text-[#1E1B4B]">
//           <h3 className="uppercase text-sm font-semibold mb-4">Shop</h3>
//           <ul className="space-y-2 text-sm text-gray-300 text-[#1E1B4B]" >
//             <li>
//               <Link href="/women">Women</Link>
//             </li>
//             <li>
//               <Link href="/men">Men</Link>
//             </li>
//             <li>
//               <Link href="newarrival">New Arrivals</Link>
//             </li>
//             {/* <li>
//               <Link href="">Best Sellers</Link>
//             </li> */}
//           </ul>
//         </div>

//         {/* About */}
//         <div>
//           <h3 className="uppercase text-sm font-semibold mb-4">About</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>
//               <Link href="#">Our Story</Link>
//             </li>
//             <li>
//               <Link href="#">Sustainability</Link>
//             </li>
//             <li>
//               <Link href="#">Care Guide</Link>
//             </li>
//             <li>
//               <Link href="#">Careers</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="uppercase text-sm font-semibold mb-4">
//             Stay Connected
//           </h3>
//           <form className="flex flex-col space-y-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-3 py-2 bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none"
//             />
//             <button className="bg-white text-black px-4 py-2 text-sm uppercase hover:bg-gray-100">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
//         &copy; {new Date().getFullYear()} Aliyana — All rights reserved.
//       </div>
//     </footer>
//   );
// }


// components/Footer.js
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
              <Link href="#" className="hover:text-[#C084FC] transition">Our Story</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C084FC] transition">Sustainability</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C084FC] transition">Care Guide</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C084FC] transition">Careers</Link>
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

