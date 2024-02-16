"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import getProductById from "@/app/service/getProductById";

interface CardProductIdProps {
  id: number;
  name: string;
  photo: string;
  currency: string;
  price: string;
}

const DetailProduct: React.FC<CardProductIdProps> = ({ id }) => {
  // const { isLoading, error, data } = useQuery(["product", id], () => {
  //   return id !== undefined
  //     ? getProductById(id)
  //     : Promise.reject(new Error("ID is undefined"));
  // });
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error</div>;

  // const productData = data?.data;

  // const { name, photo, currency, price } = productData;

  // console.log(productData);

  return (
    <section className="container py-36">
      <div className="flex gap-10">
        <Image src={"/test1.png"} width={400} height={400} alt="product" />
        <div>
          <div className="py-6 space-y-2">
            <h1 className="text-2xl">Name Product</h1>
            <h1 className="text-4xl">Rp. 100.000</h1>
            <h1>Stock : 20</h1>
          </div>
          <div className="w-full h-[2px] mb-6 bg-[#EBDECD]"></div>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            reprehenderit incidunt voluptas molestias nemo dicta laudantium
            dolorum nobis alias quo. Saepe deleniti voluptates nam similique
            dolor tempore velit reiciendis rerum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis nesciunt nostrum et
            consequatur delectus iste qui. Aliquid eligendi iure dolorem qui,
            natus molestias unde tempora ducimus, aliquam deserunt magni iusto!
          </p>
          <div className="flex justify-between pt-6 items-center">
            <div className="flex gap-6">
              <Button>S</Button>
              <Button>M</Button>
              <Button>XL</Button>
            </div>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
