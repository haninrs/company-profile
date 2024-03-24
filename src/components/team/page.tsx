import Image from "next/image";
import React from "react";

export interface ITeam {
  firstName: string;
  lastName: string;
  img: string;
  phone: string;
}

export const TeamCard: React.FC<ITeam> = ({ firstName, lastName, img, phone }: ITeam) => {
  return (
    <div className="w-full max-w-sm bg-gradient-to-b from-teal-950  to-transparent border px-12 border-slate-50 rounded-lg shadow">
      <div className="flex flex-col items-center justify-center py-10">
        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border border-slate-50" width={70} height={70} src={`${img}`} alt={`${firstName}`} />
        <h5 className="pb-1 text-xl font-medium text-slate-50 ">
          {firstName} {lastName}
        </h5>
        <span className="text-sm text-slate-400 ">{phone}</span>
        <span className="text-xs text-slate-200 text-balance text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas.</span>
      </div>
    </div>
  );
};

export default TeamCard;
