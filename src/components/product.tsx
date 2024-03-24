/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiSolidGame } from "react-icons/bi";
import { PiGameControllerFill } from "react-icons/pi";
import { SiGamejolt } from "react-icons/si";
import { TbGoGame } from "react-icons/tb";
import Link from "next/link";

export default function CardProduct({className} : { className?: string }) {
  return (
    <div className={`flex flex-col pt-10  items-center bg-gradient-to-t to-teal-950 from-slate-900 ${className} `}>
      <div className="text-2xl font-bold text-center text-slate-50 px-10 ">OUR SERVICE</div>
      <div className="py-5 z-0">
        <div className="flex flex-col md:flex-row justify-evenly gap-6">
          <div className="hidden lg:block">
            <div className=" card w-52  bg-gradient-to-b from-teal-950 to-slate-900 border border-slate-50 shadow-xl ">
              <div className="card-body ">
                <BiSolidGame className="size-11 fill-slate-50" />
                <h2 className="card-title text-slate-50">Gamification Service</h2>
                <div className="card-actions justify-start">
                  <Link href="/service">
                  <button className="btn bg-slate-200 hover:bg-slate-400 text-slate-900 lg:mt-10">View More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" card w-52 bg-gradient-to-b from-teal-950 to-slate-900 border border-slate-50 shadow-xl ">
            <div className="card-body ">
              <PiGameControllerFill className="size-11 fill-slate-50" />
              <h2 className="card-title text-slate-50"> 3D Art Game Service</h2>
              <div className="card-actions justify-start">
                <Link href='/service'>
                <button className="btn bg-slate-200 hover:bg-slate-400 text-slate-900 mt-10">View More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-52 bg-gradient-to-b from-teal-950 to-slate-900 border border-slate-50 shadow-xl">
            <div className="card-body ">
              <SiGamejolt className="size-11 fill-slate-50" />
              <h2 className="card-title text-slate-50">Full Development Service</h2>
              <div className="card-actions justify-start">
                <Link href='/service'>
                <button className="btn bg-slate-200 hover:bg-slate-400 text-slate-900 mt-3">View More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-52 bg-gradient-to-b from-teal-950 to-slate-900 border border-slate-50 shadow-xl">
            <div className="card-body ">
              <TbGoGame className="size-11 fill-slate-50" />
              <h2 className="card-title text-slate-50">Porting Service</h2>
              <div className="card-actions justify-start">
                <Link href='/service'>
                <button className="btn bg-slate-200 hover:bg-slate-400 text-slate-900 mt-10">View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
