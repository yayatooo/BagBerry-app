"use client";
import React from "react";
import CardProduct from "@/app/comon/shop/components/CardProduct";
import { CardProductProps } from "@/app/type/CardProductProps";
import { useQuery } from "react-query";
import searchParam from "@/app/service/searchParam";

interface ProductProps {
  product: CardProductProps;
}

export default function SearchContainer({ product }: ProductProps) {
  return (
    <section className="container py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* {data.map((item: CardProductProps) => (
            <CardProduct
              key={item.id}
              id={item.id}
              name={item.name}
              photo={item.photo}
              currency={item.currency}
              price={item.price}
            />
          ))} */}
      </div>
    </section>
  );
}
