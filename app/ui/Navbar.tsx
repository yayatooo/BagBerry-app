"use client";
import React, { useState, useEffect } from "react";
import { newsReader } from "../constant/font";
import { IoSearchSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosCart } from "react-icons/io";
import { navLink } from "../utility/data";
import Link from "next/link";
import { NavLinkProps } from "../type/NavLinkProps";
import CartSideBar from "./CartSideBar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <CartSideBar opened={opened} setOpened={setOpened} />
      <nav
        className={`fixed w-full z-40 text-white transition-colors duration-300  ${
          scrolled ? "bg-[#DF6724]" : "bg-transparent"
        }`}
      >
        <section className="container text-base flex max-w-7xl items-center justify-between py-6">
          <div className="text-2xl">
            <Link href="/" className={newsReader.className}>
              Bagberry.
            </Link>
          </div>
          <ul className="hidden tablet:flex gap-x-3">
            {navLink.map((data: NavLinkProps) => (
              <Link key={data.id} href={data.link}>
                {data.name}
              </Link>
            ))}
          </ul>
          <div className="flex gap-x-3 text-black">
            <div className="relative">
              <input
                type="search"
                className="rounded-full border border-gray-500 bg-black opacity-30"
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <IoSearchSharp className="text-gray-400" aria-hidden />
              </div>
            </div>
            <RxAvatar className="text-2xl text-white" />
            <button onClick={() => setOpened(true)}>
              <IoIosCart className="text-2xl text-white" />
            </button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
