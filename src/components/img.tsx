import Image from "next/image";
import React from "react";

export default function ImageComp() {
  return (
    <div>
      <Image width={280} height={158} src="/teams.jpg" alt="Team" priority className="lg:w-[1500px] lg:h-[280px] m-auto md:w-[1000px] md:h-[200px] rounded-md"></Image>
    </div>
  );
}
