import { Button } from "@/components/ui/button";
import React from "react";
import GalleryShow from "./GalleryShow";

export default function RouteToProduct() {
  return (
    <section className="container py-6 mt-32">
      <div className="w-4/12 float-right space-y-8">
        <h1 className="text-5xl font-light">
          Complate your dazzling look with our collections
        </h1>
        <Button className="rounded-full w-[250px] bg-[#DF6724] mx-auto">
          Go to Collection
        </Button>
      </div>
      <GalleryShow />
    </section>
  );
}
