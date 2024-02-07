import React from "react";
import { useFullLinks, location, ourShop } from "../utility/data";
export default function FooterRight() {
  return (
    <div className="flex py-12 gap-x-6">
      <div>
        <h1 className="font-semibold pb-5">Our Shop</h1>
        <ul>
          {ourShop.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="font-semibold pb-5">Links</h1>
        <ul>
          {useFullLinks.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="font-semibold pb-5">Our Location</h1>
        <ul>
          {location.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
