import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CardProuct() {
  return (
    <div>
      <Card className="w-[250px]">
        <CardContent className="p-0">
          <div className="relative">
            <h1 className="absolute top-0 left-0 bg-orange-500 text-white p-1 w-[80px] text-center">
              Aksesoris
            </h1>
            <Image src="/test1.png" width={250} height={250} alt="product" />
          </div>
        </CardContent>
        <div className="p-6 space-y-3">
          <CardTitle>Product 1</CardTitle>
          <div className="flex justify-between">
            <CardFooter className="p-0">Rp. 20.000</CardFooter>
            <Button className="rounded-full">Add to Cart</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
