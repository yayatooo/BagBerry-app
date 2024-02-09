import React from "react";
import DetailProduct from "./components/DetailProduct";

const page = ({ params }: { params: { detail: string } }) => {
  return <DetailProduct detail={params.detail} />;
};

export default page;
