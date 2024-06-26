import React from "react";
import ButtonLinks from "./buttonLinks";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="drawer z-20 fixed top-0 w-full ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-gradient-to-b from-slate-900 to-transparent">
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn  btn-accent btn-square btn-ghost ">
              <GiHamburgerMenu className="inline-block w-6 h-6 fill-slate-50 " />
            </label>
          </div>
          <div className="flex-1 px-2 sm:mx-2">
            <Link href="/" className="flex items-center justify-center text-slate-50 text-xl font-bold">
              <Image src="/logofix.png" alt="Logo" width={170} height={50} className="h-auto w-auto" />
            </Link>
          </div>
          <div className="flex-none hidden md:block">
            <ButtonLinks className="px-8" href="/">
              Home
            </ButtonLinks>
            <ButtonLinks className="px-8" href="/about">
              About
            </ButtonLinks>
            <ButtonLinks className="px-8" href="/service">
              Service
            </ButtonLinks>
            <ButtonLinks className="px-8" href="/team">
              Teams
            </ButtonLinks>
          </div>
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay bg-slate-900"></label>
        <ul className="menu p-4 w-72 min-h-full bg-slate-900 ">
          {/* Sidebar content here */}
          <li>
            <ButtonLinks href="/">Home</ButtonLinks>
          </li>
          <li>
            <ButtonLinks href="/about">About</ButtonLinks>
          </li>
          <li>
            <ButtonLinks href="/service">Service</ButtonLinks>
          </li>
          <li>
            <ButtonLinks href="/team">Team</ButtonLinks>
          </li>
        </ul>
      </div>
    </div>
  );
}
