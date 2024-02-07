import React from "react";
import { newsReader } from "../constant/font";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterLeft() {
  return (
    <div className="py-12 space-y-10 w-5/12">
      <div>
        <div className="text-2xl pb-4">
          <h1 className={newsReader.className}>Bagberry.</h1>
        </div>
        <p>
          Our timesless bag collections for daily & occasional use at affordable
          price
        </p>
      </div>
      <div className="w-full h-[2px]  bg-[#EBDECD]"></div>
      <div className="flex gap-20 items-center">
        <div>
          <h1 className="font-semibold pb-6">Email Us</h1>
          <h1>bagberry@company.com</h1>
        </div>
        <div>
          <h1 className="font-semibold pb-4">Follow us</h1>
          <div className="flex gap-x-6 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
