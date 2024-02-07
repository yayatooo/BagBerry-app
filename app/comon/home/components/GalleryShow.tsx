import React from "react";
import Image from "next/image";

export default function GalleryShow() {
  return (
    <div>
      <div>
        <Image
          src="/assets/gallery.png"
          width={500}
          height={500}
          alt="gallery"
          className="mobile:hidden laptop:flex"
        />
        <Image
          src="/assets/gallery2.png"
          width={400}
          height={400}
          alt="gallery"
          className="mobile:hidden laptop:flex laptop:absolute laptop:top-[92rem] laptop:ml-72"
        />
      </div>
      <Image
        src="/assets/gallery3.png"
        width={350}
        height={350}
        alt="gallery"
        className="mobile:hidden laptop:flex float-right"
      />
    </div>
  );
}
