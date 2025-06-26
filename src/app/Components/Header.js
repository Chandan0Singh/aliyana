"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <>
      {/* <div className="absolute inset-0">
        <Image
          src="/heroImage.jpg"
          alt="Gucci Inspired Banner"
          fill
          priority
          className="object-contain w-[100%]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div> */}

      <header className=" bg-black right-0 z-50 px-6 py-4 flex justify-between items-center text-white">
        <div className="text-4xl font-serif tracking-widest font-bold">
          <Link href="/">Aliyana</Link>
        </div>

        <div className="hidden md:flex gap-6 text-sm uppercase">
          <Link href="shop" className="hover:text-gray-300">
            Shop
          </Link>
          <Link href="/men" className="hover:text-gray-300">
            Men
          </Link>
          <Link href="women" className="hover:text-gray-300">
            Women
          </Link>
          <Link href="sale" className="hover:text-gray-300">
            Sale
          </Link>
          <Link href="explore" className="hover:text-gray-300">
            Explore
          </Link>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <Link href="#">
            <span>🛒</span>
          </Link>
          <Link href="#">
            <span>👤</span>
          </Link>
          <Link href="#">
            <span>🔍</span>
          </Link>
          <Link href="#">
            <span className="text-sm uppercase">
              {" "}
              <IoMenu />
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}
