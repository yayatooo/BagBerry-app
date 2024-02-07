import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { blogHome } from "@/app/utility/data";

export default function BlogHome() {
  return (
    <section className="container py-12">
      <div className="flex gap-x-8">
        <div className="w-[35%] space-y-10">
          <h1 className="text-4xl">See our inside news & editorials</h1>
          <p>
            Designed by bagbery, with premium, durable and environmentally
            fiendly materials
          </p>
          <Button className="rounded-full w-[250px] bg-[#DF6724] mx-auto">
            Explore Our Blog
          </Button>
        </div>
        {blogHome.map((item) => (
          <Card className="w-3/12 mr-4" key={item.id}>
            <CardHeader>
              <CardTitle>{item.tittle}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={item.image} width={300} height={300} alt="gallery" />
            </CardContent>
            <CardFooter>Read More</CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
