"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

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

      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center text-white">
        <div className="text-4xl font-serif tracking-widest font-bold">
          Aliyana
        </div>

        <div className="hidden md:flex gap-6 text-sm uppercase">
          <Link href="shop" className="hover:text-gray-300">
            Shop
          </Link>
          <Link href="/man" className="hover:text-gray-300">
            Men
          </Link>
          <Link href="women" className="hover:text-gray-300">
            Women
          </Link>
          <Link href="sale" className="hover:text-gray-300">
            Sale
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
            <span className="text-sm uppercase"> <IoMenu /></span>
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-[7rem] leading-none font-serif font-bold tracking-wider">
          Aliyana
        </h1>
        <p className="mt-4 text-xl">Aliyana Luxe</p>
        <button className="mt-6 px-6 py-2 bg-white text-black uppercase text-sm hover:bg-gray-100">
          Shop Now
        </button>
      </div>
    </div>
  );
}
