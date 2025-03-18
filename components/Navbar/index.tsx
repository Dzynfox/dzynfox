"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoClose, IoMenu } from "react-icons/io5";
import NavLink from "./NavLink";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center lg:px-8 px-4 py-4 border-b-2 border-blue-900 top-0 left-0 z-50 bg-white w-full">
      <div className="flex gap-2 items-center">
        <Image
          src="/images/logo.png"
          alt="Go Extra Logo"
          height={50}
          width={140}
        />
      </div>
      <ul className="gap-4 list-none hidden lg:flex">
        <NavLink label="Home" href="/" />
        <NavLink label="Courses" href="/courses" />
        <NavLink label="Contact Us" href="/#contact-us" />
      </ul>
      
        <ul className="gap-2 list-none hidden lg:flex ">
          <li className="border-accent border-2 px-4 py-2 rounded text-accent">
            <Link href="/login?redirect=https://goextra.edubiznetworks.com">
              Log In
            </Link>
          </li>
          <li className="border-accent border-2 px-4 py-2 rounded bg-accent text-white">
            <Link href="/register?redirect=https://goextra.edubiznetworks.com">
              Register
            </Link>
          </li>
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
            className={`list-none absolute pt-4 bg-accent z-30 text-white top-full left-0 w-full h-screen flex flex-col gap-4 items-center  ${open ? "scale-y-100" : "scale-y-0"} transition-all origin-top`}
          >
            <NavLink label="Home" href="/" />
            <NavLink label="Courses" href="/courses" />
            <NavLink label="Contact Us" href="/#contact-us" />
            <div className="flex gap-4">
                  <li className="border-white border-2 px-4 py-2 rounded text-white">
                    <Link href="/login?redirect=https://goextra.edubiznetworks.com">
                      Log In
                    </Link>
                  </li>
                  <li className="border-white border-2 px-4 py-2 rounded bg-white text-accent">
                    <Link href="/register?redirect=https://goextra.edubiznetworks.com">
                      Register
                    </Link>
                  </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;