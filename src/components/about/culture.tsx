import React from "react";
import { FaHandshake } from "react-icons/fa";
import { GiBodyBalance, GiKnockedOutStars } from "react-icons/gi";
import { PiArrowFatLinesUp } from "react-icons/pi";
import { RiSunLine } from "react-icons/ri";

export default function CultureSec({className} : { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap py-3 gap-3 px-12 justify-center items-center ${className}`}>
      <section className="block max-w-sm p-6 bg-slate-300 border border-slate-950 rounded-lg shadow ">
        <GiBodyBalance className="fill-slate-950 size-14" />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-950 ">Work Life Balance</h5>
        <p className="font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet..</p>
      </section>
      <section className="block max-w-sm p-6 bg-slate-300 border border-slate-950 rounded-lg shadow ">
        <RiSunLine className="fill-slate-950 size-14" />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-950 ">Positivity</h5>
        <p className="font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet..</p>
      </section>
      <section className="block max-w-sm p-6 bg-slate-300 border border-slate-950 rounded-lg shadow ">
        <PiArrowFatLinesUp className="fill-slate-950 size-14" />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-950 ">Level Up</h5>
        <p className="font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet..</p>
      </section>
      <section className="block max-w-sm p-6 bg-slate-300 border border-slate-950 rounded-lg shadow ">
        <GiKnockedOutStars className="fill-slate-950 size-14" />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-950 ">Excellence Inovation</h5>
        <p className="font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet..</p>
      </section>
      <section className="block max-w-sm p-6 bg-slate-300 border border-slate-950 rounded-lg shadow ">
        <FaHandshake className="fill-slate-950 size-14" />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-950 ">Disagree Openly, but Commit</h5>
        <p className="font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet..</p>
      </section>
    </div>
  );
}
