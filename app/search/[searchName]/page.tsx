"use client";
import React from "react";
import searchParam from "@/app/service/searchParam";
import { useQuery } from "react-query";
import Loading from "@/app/ui/Loading";
import SearchProduct from "./components/SearchProduct";
import ProductBanner from "@/app/ui/ProductBanner";

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
  if (!data || !Array.isArray(data.aaData)) return null;

  if (data.length === 0) {
    return <Loading />;
  } else {
    return (
      <>
        <ProductBanner />
        <section className="container py-16">
          <div className="flex flex-wrap gap-8">
            {data.aaData.map((item: any) => (
              <SearchProduct
                key={item.id}
                id={item.id}
                name={item.name}
                photo={item.photo}
                currency={item.currency}
                price={item.price}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}
