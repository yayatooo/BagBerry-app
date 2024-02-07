import React from "react";
import Image from "next/image";
import { bestSelling } from "@/app/utility/data";

export default function BestSellingProduct() {
  return (
    <>
      {bestSelling.map((item) => (
        <div
          className="w-3/12 h-72 bg-[#F2F2F2] p-10 flex flex-col items-center justify-center space-y-16"
          key={item.id}
        >
          <Image
            src={item.image}
            width={150}
            height={150}
            alt="product"
            className=""
          />
          <div className=" flex gap-4">
            <h3 className="font-semibold">{item.name}</h3>
            <h3 className="font-normal">{item.price}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
