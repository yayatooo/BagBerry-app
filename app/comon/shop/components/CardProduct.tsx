import React from "react";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardProductProps } from "@/app/type/CardProductProps";

const CardProduct: React.FC<CardProductProps> = ({
  name,
  photo,
  price,
  currency,
  id,
}: CardProductProps) => {
  return (
    <div>
      <Card className="w-[280px]" key={id}>
        <CardContent className="p-0">
          <div className="relative">
            <h1 className="absolute top-0 left-0 bg-orange-500 text-white p-1 w-[85px] text-center">
              Aksesoris
            </h1>
            <Image
              src={photo}
              width={280}
              height={280}
              alt="product"
              className="object-cover"
            />
          </div>
        </CardContent>
        <div className="p-6 space-y-3">
          <CardTitle>{name}</CardTitle>
          <div className="flex justify-between py-3">
            <CardFooter className="p-0 font-medium">
              {currency}
              {price}
            </CardFooter>
            <Button className="rounded-full bg-[#DF6724]">Add to Cart</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardProduct;
