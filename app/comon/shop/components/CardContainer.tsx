"use client";
import React from "react";
import CardProduct from "./CardProduct";
import { useQuery } from "react-query";
import axios from "axios";
import { CardProductProps } from "@/app/type/CardProductProps";

const fetchProduct = async () => {
  const url = process.env.NEXT_PUBLIC_PRODUCT_URL || "";
  const response = await axios.get(url);
  if (response.status !== 200) {
    throw new Error("Could not get products");
  }
  return response.data.aaData;
};

export default function CardContainer() {
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetchProduct(),
    queryKey: ["products"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <section className="container py-16">
      <div className="flex flex-wrap gap-8 justify-center">
        {data.map((item: CardProductProps) => (
          <CardProduct
            key={item.id}
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
