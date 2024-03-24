import React from "react";

export default function VidioMd() {
  return (
    <div>
      <iframe
        className="lg:w-[560px] lg:h-[315px] m-auto md:w-[374] md:h-[210] rounded-md "
        width="280"
        height="158"
        src="https://www.youtube.com/embed/uqR0O4iaLo8?si=N5SbGSKHuMqGiT_Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
        
        </iframe>
    </div>
  );
}
