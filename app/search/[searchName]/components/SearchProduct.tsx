import React from "react";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardProductProps } from "@/app/type/CardProductProps";
import Link from "next/link";

const SearchProduct: React.FC<CardProductProps> = ({
  id,
  name,
  photo,
  price,
  currency,
}: CardProductProps) => {
  return (
    <Link href={`/shop/${id}`}>
      <Card className="w-[280px]">
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
    </Link>
  );
};

export default SearchProduct;
