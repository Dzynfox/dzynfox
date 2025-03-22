"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavLink from "./NavLink";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center  px-4 w-full">
      <div className="flex items-center">
        <div className="relative w-20 h-20 lg:w-32 lg:h-32">
          <Image
            src="/images/logo.png"
            alt="DzynFox Visual Communications LLP"
            fill
          />
        </div>
      </div>
      <ul className="gap-4 list-none hidden lg:flex">
        <NavLink label="Home" href="/" />
        <NavLink label="Services" href="/#expertise" />
        <NavLink label="Allied Services" href="/allied-services" />
        <NavLink label="Our Blogs" href="/blogs" />
        <NavLink label="About Us" href="/about-us" />
        <NavLink label="Our Partner" href="/partners" />
        <NavLink label="Contact Us" href="/#contact" />
      </ul>

      <div className="lg:hidden flex items-center">
        <button
          className="border-2 rounded-lg px-2 py-1"
          onClick={() => setOpen((state) => !state)}
        >
          {open ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>

        <div>
          <ul
            className={`list-none absolute pt-4 bg-accent z-30 text-white top-full left-0 w-full py-10 flex flex-col gap-10 px-10  ${open ? "scale-y-100" : "scale-y-0"} transition-all origin-top rounded-br-[50%]`}
          >
            <NavLink label="Home" href="/" />
            <NavLink label="Services" href="/#expertise" />
            <NavLink label="Allied Services" href="/allied-services" />
            <NavLink label="Our Blog" href="/blog" />
            <NavLink label="About Us" href="/about-us" />
            <NavLink label="Our Partner" href="/partners" />
            <NavLink label="Contact Us" href="/#contact" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
