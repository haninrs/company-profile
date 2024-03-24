import React from "react";
import CardService from "./produkService";
import TestiSec from "./product/testi";

export default function ProductDetail() {
  return (
    <div className=" scroll-smooth">
      <div className="hero min-h-72 max-w-full *:" style={{ background: "linear-gradient(to bottom , transparent, #0f172a), url('/hero2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-overlay bg-opacity-45"></div>
        <div className=" hero-content text-canter">
          <div className="max-w-fit">
            <h1 className="text-slate-50 text-2xl sm:text-4xl font-bold m-auto ">GAME DEVELOPMENT SERVICE</h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-900 to-teal-950">
        <section className="px-14 py-7 text-center ">
          <h1 className="text-2xl sm:text-3xl text-slate-50 font-semibold mt-5 pb-5">HOW WE CAN HELP?</h1>
          <p className="py-4 text-balance text-slate-50">
            Lorem ipsum dolor sit amet optio ea alias ut. Sapiente quo molestias corporis quasi quibusdam deleniti iste, tenetur, temporibus, accusantium ea at soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            tempore!
          </p>
          <p className="py-4 text-balance text-slate-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo enim qui libero odio consequatur deleniti minus! Nihil quod fugiat eum quae officia, blanditiis maiores totam magnam libero ab laborum? Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi.
          </p>
          <p className="py-4 text-balance text-slate-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, officiis.</p>
        </section>
      </div>
      <CardService />
      <TestiSec />
    </div>
  );
}
