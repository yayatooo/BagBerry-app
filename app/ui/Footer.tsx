import React from "react";
import FooterLeft from "./FooterLeft";
// import { useFullLinks, location, ourShop } from "../utility/data";
import FooterRight from "./FooterRight";

export default function Footer() {
  return (
    <>
      <footer className="container flex justify-between gap-x-16">
        <FooterLeft />
        <FooterRight />
      </footer>
      <div className=" container w-full h-[2px]  bg-[#EBDECD] my-6"></div>
    </>
  );
}
