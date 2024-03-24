/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import TeamCard from "./page";

export default function TeamSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="bg-gradient-to-t from-slate-900 to text-teal-950 px-12 pt-7">
      <div className="text-2xl font-bold text-center text-slate-50 py-7 px-10">OUR TEAM</div>
      <div className="flex flex-col sm:flex-row flex-wrap  gap-3 justify-center items-center">
        {data.map((user: any, idx) => (
          <TeamCard key={idx} firstName={user.name.first} lastName={user.name.last} img={user.picture.thumbnail} phone={user.phone} />
        ))}
      </div>
    </div>
  );
}
