/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import VidioMd from "./vidioMd";
import ImageComp from "./img";

export default function CompanyOverview() {
  return (
    <div id="company" className="max-w-full text-slate-50  bg-gradient-to-b from-slate-900 to-teal-950">
      <section className="p-7 text-center">
        <p className="py-4 text-balance">
          Lorem ipsum dolor sit amet optio ea alias ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo enim qui libero odio consequatur deleniti minus! Nihil quod fugiat eum quae officia, blanditiis maiores totam magnam
          libero ab laborum? Sapiente quo molestias corporis quasi quibusdam deleniti iste, tenetur, temporibus, accusantium ea at soluta.
        </p>
      </section>

      <div className="flex flex-col md:justify-between md:flex-row  py-10 px-6">
        <div className="mx-auto mb-6">
          <Suspense fallback={<p>Loading video...</p>}>
            <VidioMd />
          </Suspense>
        </div>

        <div className="text-center text-balance md:text-end md:self-center px-7">
          <h1 className=" my-4 text-2xl font-semibold ">ABOUT GAMESTART</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet. adipisicing elit. Sint, placeat. Nulla, nisi ea! Architecto nobis ullam officia!</p>
          <p className="py-3 lg:inline-block hidden">Lorem amet, consectetur adipisicing ea! Architecto nobis ullam officia!</p>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="stats stats-vertical md:stats-horizontal bg-transparent  ">
          <div className="stat">
            <div className="stat-value text-slate-50">10+</div>
            <div className="stat-title text-slate-50">YEARS</div>
          </div>

          <div className="stat">
            <div className="stat-value text-slate-50">50+</div>
            <div className="stat-title text-slate-50">GAMES</div>
          </div>

          <div className="stat">
            <div className="stat-value text-slate-50">10M+</div>
            <div className="stat-title text-slate-50">DOWNLOADS</div>
          </div>

          <div className="stat">
            <div className="stat-value text-slate-50">10+</div>
            <div className="stat-title text-slate-50">AWARDS</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:justify-between md:flex-row-reverse  py-10 px-6">
        <div className="mx-auto mb-6">
          <ImageComp />
        </div>

        <div className="text-center text-balance md:text-start md:self-center px-7">
          <h1 className=" my-4 text-2xl font-semibold ">THE TEAM</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet. adipisicing elit. Sint, placeat. Nulla, nisi ea! Architecto nobis ullam officia!</p>
          <p className="py-3 lg:inline-block hidden">Lorem amet, consectetur adipisicing ea! Architecto nobis ullam officia!</p>
        </div>
      </div>
    </div>
  );
}
