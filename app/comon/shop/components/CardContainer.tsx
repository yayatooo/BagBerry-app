"use client";
import React from "react";
import CardProuct from "./CardProuct";
import { useQuery } from "react-query";
import axios from "axios";

const fetchProduct = async () => {
  const url =
    process.env.PRODUCT_URL || "https://sistemtoko.com/public/demo/product";

  const response = await axios.get(url);
  if (response.status !== 200) {
    throw new Error("Could not get products");
  }
  return response.data;
};

export default function CardContainer() {
  const { isLoading, error, data } = useQuery("products", fetchProduct, {
    refetchInterval: 5000,
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <section className="container py-16">
      <div className="flex flex-wrap gap-12 justify-center">
        <CardProuct />
        <CardProuct />
        <CardProuct />
        <CardProuct />
      </div>
    </section>
  );
}
