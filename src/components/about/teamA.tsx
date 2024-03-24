import React from "react";
import Image from "next/image";

export default function TeamAbout() {
  return (
    <div className="bg-gradient-to-t from-slate-900 to text-teal-950 py-7">
      <div className="flex flex-col sm:flex-row flex-wrap py-3 gap-3 px-8 justify-center items-center">
        <div className="w-full max-w-sm bg-gradient-to-b from-teal-950  to-transparent border border-slate-50 rounded-lg shadow">
          <div className="flex flex-col items-center justify-center py-10">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border border-slate-50" width={524} height={800} src="/profile4.jpg" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-slate-50">Budi Eko</h5>
            <span className="text-sm text-slate-400">CHIEF EXECUTIVE OFFICER</span>
            <span className="text-xs text-slate-200 text-balance text-center p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas.</span>
          </div>
        </div>
        <div className="w-full max-w-sm bg-gradient-to-b from-teal-950  to-transparent border border-slate-50 rounded-lg shadow">
          <div className="flex flex-col items-center justify-center py-10">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border border-slate-50" width={50} height={50} src="/profile2.jpg" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-slate-50">Nam Do San</h5>
            <span className="text-sm text-slate-400">CHIEF TECHNOLOGY OFFICER</span>
            <span className="text-xs text-slate-200 text-balance text-center p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas.</span>
          </div>
        </div>
        <div className="w-full max-w-sm bg-gradient-to-b from-teal-950 to-transparent border border-slate-50 rounded-lg shadow">
          <div className="flex flex-col items-center justify-center py-10">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border border-slate-50" width={50} height={50} src="/testi1.jpg" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-slate-50">Retno Sari</h5>
            <span className="text-sm text-slate-400">CHIEF PEOPLE OFFICER</span>
            <span className="text-xs text-slate-200 text-balance text-center p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas.</span>
          </div>
        </div>
        <div className="w-full max-w-sm bg-gradient-to-b from-teal-950 to-transparent border border-slate-50 rounded-lg shadow">
          <div className="flex flex-col items-center justify-center py-10">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border border-slate-50" width={564} height={725} src="/profile.jpg" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-slate-50">Lisa Rahayu</h5>
            <span className="text-sm text-slate-400">CHIEF STRATEGY OFFICER</span>
            <span className="text-xs text-slate-200 text-balance text-center p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas.</span>
          </div>
        </div>
        <div className="w-full max-w-sm bg-gradient-to-b from-teal-950 to-transparent border border-slate-50 rounded-lg shadow">
          <div className="flex flex-col items-center justify-center py-10">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border border-slate-50" width={735} height={825} src="/profile1.jpg" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-slate-50">Ferdi Jun</h5>
            <span className="text-sm text-slate-400">VICE PRESIDENT OF MARKETING & SALES</span>
            <span className="text-xs text-slate-200 text-balance text-center p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
