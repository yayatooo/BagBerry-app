import React from "react";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import RouteToProduct from "./components/RouteToProduct";
import AdsComponents from "./components/AdsComponents";
import BlogHome from "./components/BlogHome";
import Partner from "./components/Partner";

const HomeComponent = () => {
  return (
    <section>
      <Hero />
      <BestSelling />
      <RouteToProduct />
      <AdsComponents />
      <BlogHome />
      <Partner />
    </section>
  );
};

export default HomeComponent;
