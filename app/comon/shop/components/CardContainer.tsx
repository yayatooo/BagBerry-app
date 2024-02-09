"use client";
import React from "react";
import CardProuct from "./CardProuct";
import { useQuery } from "react-query";
import axios from "axios";

const fetchTodos = async () => {
  const response = await axios.get(
    "https://sistemtoko.com/public/demo/product"
  );
  return response.data;
};

export default function CardContainer() {
  const { isLoading, error, data } = useQuery("todos", fetchTodos);

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
