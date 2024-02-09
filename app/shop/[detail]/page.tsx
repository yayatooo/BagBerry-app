import React from "react";
import DetailProduct from "./components/DetailProduct";

const page = ({ params }: { params: { detail: string } }) => {
  return <DetailProduct />;
};

export default page;
