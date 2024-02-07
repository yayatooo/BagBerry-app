import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function AdsComponents() {
  return (
    <section className="mt-[30rem] w-full bg-[#DF6724]">
      <div className="container flex py-20 gap-8 mobile:flex-col mobile:text-center mobile:items-center laptop:flex-row laptop:items-center">
        <Image
          src="/assets/image17.png"
          width={500}
          height={500}
          alt="gallery"
        />
        <div className="p-8 text-white space-y-9  w-8/12">
          <h1 className="text-5xl font-normal">
            Our handbag styles are the ultimate indulgance
          </h1>
          <p className="text-base">
            Sitting comfortably round the waist, it fastens with a buckle clip
            on an adjustable strap
          </p>
          <Button className="rounded-full bg-white text-[#DF6724] hover:bg-[#aa592e]">
            Go to Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
