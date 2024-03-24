import React, { useEffect, useRef } from "react";

const VidioMd: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the video when it enters the viewport
            iframe.src = iframe.dataset.src!;
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    intersectionObserver.observe(iframe);

    // Cleanup
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="lg:w-[560px] lg:h-[315px] m-auto md:w-[374] md:h-[210] rounded-md "
        width="280"
        height="158"
        src="https://www.youtube.com/embed/uqR0O4iaLo8?si=N5SbGSKHuMqGiT_Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  );
};

export default VidioMd;
