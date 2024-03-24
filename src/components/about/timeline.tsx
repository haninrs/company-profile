import React from "react";

export default function TimelineSec() {
  return (
    <div>
      <div className="p-7 flex justify-center">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start  md:text-end mb-10 pb-10 md:pb-0 ">
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">First Hit Game</div>
              <span className=" align-text-top hidden md:inline">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque debitis a quidem aperiam sapiente veniam reiciendis hic atque exercitationem obcaecati, dignissimos, quae harum magnam culpa soluta corrupti eos, distinctio
                unde odit vitae minima! Iste cum sint amet officiis.
              </span>
            </div>
            <hr className="bg-slate-50" />
          </li>
          <li>
            <hr className="bg-slate-50" />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2018</time>
              <div className="text-lg font-black">Patnered with Malaysia</div>
              <span className=" align-text-top hidden md:inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi ullam quaerat fuga animi? Nobis officiis excepturi ut.</span>
            </div>
            <hr className="bg-slate-50" />
          </li>
          <li>
            <hr className="bg-slate-50" />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 pb-10 md:pb-0 ">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">Realesed WEB3 Game Ip</div>
              <span className="align-text-top hidden md:inline">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quasi voluptatum sit magnam tenetur necessitatibus quis voluptates modi repellendus nostrum!</span>
            </div>
            <hr className="bg-slate-50" />
          </li>
          <li>
            <hr className="bg-slate-50" />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">Reach 500+ Clients</div>
              <span className="align-text-top hidden md:inline ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda illum perspiciatis omnis dolorum ipsa nihil, est perferendis. Veritatis eligendi ipsa in quos, dicta non esse, unde, perspiciatis incidunt quidem
                dolores illo.
              </span>
            </div>
            <hr className="bg-slate-50" />
          </li>
          <li>
            <hr className="bg-slate-50" />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 pb-10 md:pb-0 ">
              <time className="font-mono italic">2025</time>
              <div className="text-lg font-black">Global No.1</div>
              <span className=" align-text-top hidden md:inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum temporibus quae in laboriosam iure.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
