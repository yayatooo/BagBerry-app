import Image from "next/image";
import React from "react";

export default function BestSelling() {
  return (
    <section className="container">
      <h1 className="font-normal text-4xl p-6">Best Selling</h1>
      <div className="flex gap-4 overflow-auto p-6">
        <div className="w-3/12 h-72 bg-[#F2F2F2] flex items-center justify-center">
          <Image src="/best/image.png" width={150} height={150} alt="product" />
        </div>
      </div>
    </section>
  );
}
