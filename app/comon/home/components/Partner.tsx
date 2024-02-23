import React from "react";
import Image from "next/image";

export default function Partner() {
  return (
    <section>
      <div className="container bg-[#EEEFE6] py-28 space-y-16 flex flex-col items-center justify-center">
        <p className="font-normal">Testimonials by famous ma&quot;gazines</p>
        <h1 className="text-4xl">
          &quot;The most beautifully designed handbags ever&quot;
        </h1>
        <div className="w-8/12 h-[2px] bg-[#EBDECD]"></div>
        <div className="flex laptop:w-6/12 mobile:w-full justify-between pt-14">
          <Image
            src="/partner/partner.png"
            width={120}
            height={100}
            alt="partner"
          />
          <Image
            src="/partner/partner2.png"
            width={120}
            height={100}
            alt="partner"
          />
          <Image
            src="/partner/partner3.png"
            width={120}
            height={100}
            alt="partner"
          />
        </div>
      </div>
    </section>
  );
}
