"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";
import SearchBar from "./Searchbar";
import { usePathname } from "next/navigation";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);

    const pathname = usePathname();
  const isHome = pathname === "/";



  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#FDF4FF] z-50 px-6 py-4 shadow-sm relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl sm:text-4xl font-serif text-[#1E1B4B] tracking-widest font-bold">
          <Link href="/">Aliyana</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm uppercase text-[#1E1B4B]">
          <Link href="/shop" className="hover:text-[#4C1D95] transition">Shop</Link>
          <Link href="/men" className="hover:text-[#4C1D95] transition">Men</Link>
          <Link href="/women" className="hover:text-[#4C1D95] transition">Women</Link>
          <Link href="/sale" className="hover:text-[#4C1D95] transition">Sale</Link>
          <Link href="/explore" className="hover:text-[#4C1D95] transition">Explore</Link>
        </nav>

        {/* Icons */}
        
        <div className="flex items-center gap-4 text-xl text-[#1E1B4B]">
          
          {isHome && <>{showSearch && (
            <div className="absolute w-[100vw] left-0 top-[15vh]">
              <SearchBar/>
            </div>
          )}
          <span className="bg-[#FDF4FF]" onClick={() => setShowSearch(!showSearch)} aria-label="Search Toggle">🔍</span></>}

          {user ? (
            <>
              <div className="me-4 flex items-center gap-4 text-xl text-[#423f69]">
                <Link href="/cart" aria-label="Cart">🛒</Link>
                <Link href="/account" aria-label="Account">👤</Link>
              </div>
              <span onClick={logout} className="">Logout</span>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-[#4C1D95] transition">Login</Link>
              <Link href="/signup" className="hover:text-[#4C1D95] transition">Signup</Link>
            </>
          )}


          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDF4FF] border-t border-[#E5E7EB] shadow-md md:hidden z-50">
          <nav className="flex flex-col px-6 py-4 gap-4 text-[#1E1B4B] text-sm uppercase">
            {[
              { label: "Shop", href: "/shop" },
              { label: "Men", href: "/men" },
              { label: "Women", href: "/women" },
              { label: "Sale", href: "/sale" },
              { label: "Explore", href: "/explore" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-[#4C1D95] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
