"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeBody() {
  return (
    <>
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Timeless Elegance
            </h2>
            <p className="text-gray-600 mb-6">
              Discover our handcrafted luxury handbags, designed to elevate your
              everyday.
            </p>
            <Link href="#" className="/home-domey-Image.jpeg">
              Explore Collection
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/home-domey-Image.jpeg"
              alt="Handbag"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
          <div className="relative h-[400px]">
            <Image
              src="/home-domey-Image.jpeg"
              alt="Classic Bag"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black text-sm font-medium shadow">
              GG Classic Tote
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/home-domey-Image.jpeg"
              alt="Modern Bag"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black text-sm font-medium shadow">
              Marmont Mini Crossbody
            </div>
          </div>
        </div>

        <div className="bg-gray-100 mt-20 px-6 py-16 text-center">
          <h3 className="text-3xl font-serif mb-4">Get Exclusive Updates</h3>
          <p className="text-gray-600 mb-6">
            Join our newsletter and stay updated on new drops, offers & more.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:flex-1 border border-gray-300 focus:outline-none"
            />
            <button className="px-6 py-2 bg-black text-white uppercase text-sm hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl text-[#695757] font-serif font-semibold mb-12">
            Aliyana Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="flex flex-col items-center text-center">
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg shadow">
                <Image
                  src="/home-domey-Image.jpeg"
                  alt="Custom Engraving"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Engraving</h3>
              <p className="text-sm text-gray-600">
                Personalize select leather goods and accessories with initials
                or symbols that reflect your style.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg shadow">
                <Image
                  src="/home-domey-Image.jpeg"
                  alt="Private Session"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Private Session</h3>
              <p className="text-sm text-gray-600">
                Schedule an exclusive appointment with our stylists and explore
                curated collections in a calm, luxe setting.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg shadow">
                <Image
                  src="/home-domey-Image.jpeg"
                  alt="In-store Pickup"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">In-store Pickup</h3>
              <p className="text-sm text-gray-600">
                Shop online and collect your order at a nearby boutique — quick,
                secure and complimentary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
