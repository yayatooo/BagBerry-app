"use client";
import React from "react";
import searchParam from "@/app/service/searchParam";
import { useQuery } from "react-query";
import SearchProduct from "./components/SearchProduct";

// import SearchContainer from "./components/SearchContainer";

export default function Page({ params }: { params: { searchName: string } }) {
  //   const { data, isLoading } = useQuery(
  //     ["search", params.searchName],
  //     () => searchParam(params.searchName),
  //     {
  //       enabled: !!params.searchName,
  //     }
  //   );

  //   console.log(data);

  // Check if data is undefined or not an array
  //   if (isLoading) return <div>Loading...</div>;
  //   if (!data || !Array.isArray(data)) return null;

  return (
    <>
      <h1 className="text-3xl font-semibold text-center py-36">
        {params.searchName}
      </h1>
    </>
  );
}

/* <section className="container py-16">
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
    {data === undefined ? (
      <h1>loading</h1>
    ) : (
      <>
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
      </>
    )}
  </div>
</section> */
