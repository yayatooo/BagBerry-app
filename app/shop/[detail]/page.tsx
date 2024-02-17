"use client";
import { useQuery } from "react-query";
import productId from "@/app/service/productId";
import DetailProduct from "./components/DetailProduct";
import { useEffect } from "react";

export default function Page() {
  return <DetailProduct />;
}
