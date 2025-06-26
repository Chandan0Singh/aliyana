"use client";
import { useState } from "react";
import GenderSelector from "../Components/GenderSelector";
import AgeSelector from "../components/AgeSelector";
import BagList from "../components/BagList";
import ProductsPage from "../products/page";

export default function HomeBody() {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  return (
    <>
      {/* Hero Content */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
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
      <div className="p-6">
        {!gender && <GenderSelector onSelect={setGender} />}
        {gender && !age && <AgeSelector gender={gender} onSelect={setAge} />}
        {gender && age && <BagList gender={gender} age={age} />}
      </div>
      <ProductsPage />
    </>
  );
}
