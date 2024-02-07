import React from "react";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import RouteToProduct from "./components/RouteToProduct";
import AdsComponents from "./components/AdsComponents";
import BlogHome from "./components/BlogHome";

const HomeComponent = () => {
  return (
    <section>
      <Hero />
      <BestSelling />
      <RouteToProduct />
      <AdsComponents />
      <BlogHome />
    </section>
  );
};

export default HomeComponent;
