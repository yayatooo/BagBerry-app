import React from "react";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import RouteToProduct from "./components/RouteToProduct";

const HomeComponent = () => {
  return (
    <section>
      <Hero />
      <BestSelling />
      <RouteToProduct />
    </section>
  );
};

export default HomeComponent;
