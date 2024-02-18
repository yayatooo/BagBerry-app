"use client";
import { useQuery } from "react-query";
import DetailProduct from "./components/DetailProduct";
import getProductById from "@/app/service/getProductById";
import { useRouter } from "next/navigation";
import { CardProductProps } from "@/app/type/CardProductProps";

export default function Page({ params }: { params: { detail: number } }) {
  const { data, isLoading, error } = useQuery(["product", params.detail], () =>
    getProductById(params.detail)
  );

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return <DetailProduct product={data} />;
}
