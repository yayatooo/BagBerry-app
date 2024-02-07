import React from "react";
import BestSellingProduct from "./BestSellingProduct";

export default function BestSelling() {
  return (
    <section className="container">
      <h1 className="font-normal text-4xl p-6">Best Selling</h1>
      <div className="flex gap-4 overflow-auto p-6">
        <BestSellingProduct />
      </div>
    </section>
  );
}
