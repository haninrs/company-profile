"use client";

import CompanyOverview from "./companyOverview";
import { TypeAnimation } from "react-type-animation";
import CardProduct from "./product";
import { HiChevronDown } from "react-icons/hi";
import TestiSec from "./product/testi";
import CultureSec from "./about/culture";
import Link from "next/link";

// max-w-screen-md-16

export default function HomePage() {
  const scrollToCompany = () => {
    const company = document.getElementById("company");
    company?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div
        className=" hero place-items-start min-h-60 lg:min-h-screen max-w-full  *:"
        style={{ background: "linear-gradient(to bottom , transparent, #0f172a), url(/hero3.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" z-0 flex items-start justify-start max-w-[1280px] gap-1 ps-8 py-32 md:pt-64 lg:pt-64 text-canter ">
          <div className="w-full text-slate-200">
            <h1 className="mb-3 text-2xl sm:text-5xl font-bold ">CRAFTING</h1>
            <div className="text-2xl sm:text-5xl font-bold ">
              <TypeAnimation sequence={["EXCEPTIONAL", 2000, "FUN", 2000, "GROUNDBREAKING", 2000]} repeat={Infinity} />
            </div>
            <h1 className="mb-5 mt-3 text-2xl sm:text-5xl font-bold ">GAMES</h1>
            <Link href="/form" target="_blank">
              <button className=" btn btn-outline border-slate-50 text-slate-50  ">GET STARTED NOW</button>
            </Link>
          </div>
        </div>
        <button onClick={scrollToCompany} className=" hidden md:inline-flex absolute pb-16 self-end  place-self-center ">
          <HiChevronDown className="size-11 animate-bounce fill-slate-50" />
        </button>
      </div>

      <CompanyOverview />
      <div className="text-2xl font-bold text-center bg-teal-950 text-slate-50 py-7 px-10 ">CULTURE AT GAMESTART</div>
      <CultureSec className="bg-teal-950" />
      <CardProduct />
      <TestiSec />

      <div className="text-2xl sm:text-5xl min-h-96 font-bold text-center px-8 text-slate-50 bg-slate-900 flex justify-center items-center">
        <q>Empowering Innovation, Inspiring Excellence</q>
      </div>
    </div>
  );
}
