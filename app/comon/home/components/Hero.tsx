import { Button } from "@/components/ui/button";
import React from "react";
// import Image from "next/image";
// import cover from "./assets/cover.png";

export default function Hero() {
  return (
    <section className="flex flex-col p-32 text-center gap-y-8 laptop:p-64 items-center ">
      <h1 className="text-5xl laptop:w-6/12">Our timeless bag collections</h1>
      <p className="text-lg laptop:w-4/12 laptop:text-base">
        Designed for the way you live your life. Bagberry are beautiful in their
        simplicity
      </p>
      <Button className="rounded-full w-[250px] bg-[#DF6724] mx-auto">
        Go to Shop
      </Button>
    </section>
  );
}
