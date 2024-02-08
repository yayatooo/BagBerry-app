import React from "react";
import CardContainer from "./CardContainer";

export default function Shop() {
  return (
    <section className="container py-32">
      <div className="text-center w-8/12 mx-auto space-y-6">
        <h1 className="font-semibold text-3xl laptop:text-5xl">
          Special Product With Offers
        </h1>
        <p className="text-[#adadad] text-base laptop:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
          accusamus possimus nobis porro, quisquam magni maiores ullam. Quis
          eaque vel, laboriosam optio, fugit quae dolore, expedita a assumenda
          amet reprehenderit.
        </p>
      </div>
      <CardContainer />
    </section>
  );
}
