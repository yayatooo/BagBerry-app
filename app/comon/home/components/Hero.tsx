import { Button } from "@/components/ui/button";
import React from "react";
// import Image from "next/image";
// import cover from "./assets/cover.png";

export default function Hero() {
  return (
    <section className="flex flex-col p-32 text-center gap-y-4">
      <h1 className="text-5xl">Our timeless bag collections</h1>
      <p className="text-lg">
        Designed for the way you live your life. Bagberry are beautiful in their
        simplicity
      </p>
      <Button className="rounded-full w-[250px] bg-[#DF6724] mx-auto">
        Go to Shop
      </Button>
    </section>
  );
}
