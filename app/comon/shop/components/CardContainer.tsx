"use client";
import React from "react";
import CardProduct from "./CardProduct";
import { useQuery } from "react-query";
import { CardProductProps } from "@/app/type/CardProductProps";
import fetchProduct from "@/app/service/getProduct";

export default function CardContainer() {
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetchProduct(),
    queryKey: ["products"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  // if (data) {
  //   data.forEach((item: CardProductProps) => {
  //     console.log(item.id);
  //   });
  // }

  return (
    <section className="container py-16">
      <div className="flex flex-wrap gap-8 justify-center">
        {data.map((item: CardProductProps) => (
          <CardProduct
            name={item.name}
            photo={item.photo}
            currency={item.currency}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
