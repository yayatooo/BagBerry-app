"use client";
import React from "react";
import searchParam from "@/app/service/searchParam";
import { useQuery } from "react-query";
import Loading from "@/app/ui/Loading";
import SearchProduct from "./components/SearchProduct";

export default function Page({ params }: { params: { searchName: string } }) {
  const { data, isLoading } = useQuery(
    ["search", params.searchName],
    () => searchParam(params.searchName),
    {
      enabled: !!params.searchName,
    }
  );

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (!data || !Array.isArray(data)) return null;

  if (data.length === 0) {
    return <Loading />;
  } else {
    return (
      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item: any) => (
            <SearchProduct
              key={item.id}
              id={item.id}
              name={item.name}
              photo={item.photo}
              currency={item.currency}
              price={item.price}
            />
          ))}
          {/* <h1 className="text-3xl py-48">{params.searchName}</h1> */}
        </div>
      </section>
    );
  }
}
