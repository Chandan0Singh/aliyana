"use client";
import { useState } from "react";
import GenderSelector from "../../Components/GenderSelector";
import AgeSelector from "../../components/AgeSelector";
import BagList from "../../components/BagList";
import ProductsPage from "../../products/page";

export default function HomeBody() {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  return (
    <>
      <div className="p-6">
        {!gender && <GenderSelector onSelect={setGender} />}
        {gender && !age && <AgeSelector gender={gender} onSelect={setAge} />}
        {gender && age && <BagList gender={gender} age={age} />}
      </div>
      <ProductsPage/>
    </>
  );
}
