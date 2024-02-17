import React from "react";
import DetailProduct from "./components/DetailProduct";
import { CardProductProps } from "@/app/type/CardProductProps";

export default function Page({
  params,
}: {
  params: { detail: CardProductProps };
}) {
  return <DetailProduct detail={params.id} />;
}
