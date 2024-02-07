import React from "react";
import HomeParent from "../home/page";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeParent />
      <Footer />
    </>
  );
}
