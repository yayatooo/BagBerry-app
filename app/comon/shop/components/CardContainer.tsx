import React from "react";
import CardProuct from "./CardProuct";

export default function CardContainer() {
  return (
    <section className="container py-16">
      <div className="flex flex-wrap gap-12 justify-center">
        <CardProuct />
        <CardProuct />
        <CardProuct />
        <CardProuct />
      </div>
    </section>
  );
}
