import Image from "next/image";
import React from "react";

export default function TestiSec() {
  return (
    <div className="py-8 sm:py-10 bg-slate-900 px-12 sm:px-32">
      <div className="text-2xl font-bold text-center text-slate-50 px-10  py-7">WHAT OUR CLIENTS SAY?</div>

      <div className="grid pb-8 border border-slate-900 rounded-lg shadow-sm dark:border-gray-700 md:b-12 md:grid-cols-2 bg-slate-300">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500">
            <h3 className="text-lg font-semibold text-gray-950">Lorem ipsum dolor sit amet.</h3>
            <p className="my-4">
              <q>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.</q>
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image priority className="rounded-full w-9 h-9" width={50} height={50} src="/testi1.jpg" alt="profile picture" />
            <div className="space-y-0.5 font-medium text-gray-950 text-left rtl:text-right ms-3">
              <div>Alexa Fitri</div>
              <div className="text-sm text-gray-500 ">General Manager at Tukupidia</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-b border-gray-200 md:rounded-se-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-gray-950 ">Lorem ipsum, dolor sit amet consectetur.</h3>
            <p className="my-4">
              <q>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</q>
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image priority width={70} height={80} className="rounded-full w-9 h-9" src="/testi2.jpg" alt="profile picture" />
            <div className="space-y-0.5 font-medium text-slate-950 text-left rtl:text-right ms-3">
              <div>Surya Sitorus</div>
              <div className="text-sm text-gray-500 ">Head Social Departement at BookLapak</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-slate-950">Lorem ipsum.</h3>
            <p className="my-4">
              <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo.</q>
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image priority width={70} height={80} className="rounded-full w-9 h-9" src="/testi3.jpg" alt="profile picture" />
            <div className="space-y-0.5 font-medium text-slate-950 text-left rtl:text-right ms-3">
              <div>Jonathan Wicaksono</div>
              <div className="text-sm text-gray-500 ">CEO at Shupee</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-transparent border-gray-200 rounded-b-lg md:rounded-se-lg ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-slate-950">Lorem ipsum dolor sit amet.</h3>
            <p className="my-4">
              <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptate exercitationem odit distinctio, laborum neque molestiae.</q>
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image priority width={70} height={80} className="rounded-full w-9 h-9" src="/testi4.jpg" alt="profile picture" />
            <div className="space-y-0.5 font-medium text-slate-950 text-left rtl:text-right ms-3">
              <div>Adit McFall</div>
              <div className="text-sm text-gray-500 ">Admin at Bleebli</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
