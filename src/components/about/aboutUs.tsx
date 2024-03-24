import TimelineSec from "./timeline";
import TeamAbout from "./teamA";
import CultureSec from "./culture";

export default function AboutUs() {
  return (
    <div className="">
      <div className="hero min-h-96" style={{ background: "linear-gradient(to bottom, transparent, #0f172a), url(/hero4.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center px-6 text-slate-50">
          <div className="max-w-md ">
            <h1 className="mb-5 text-3xl sm:text-5xl text-start font-bold">LEADING GAME DEVELOPMENT COMPANY</h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-slate-900 via-teal-950 to-slate-900 ">
        <div className=" text-slate-50 ">
          <div>
            <section className="px-14 py-7 text-center">
              <h1 className="text-2xl sm:text-3xl font-semibold mt-5 pb-5">WHO WE ARE</h1>
              <p className="py-4 text-balance">
                Lorem ipsum dolor sit amet optio ea alias ut. Sapiente quo molestias corporis quasi quibusdam deleniti iste, tenetur, temporibus, accusantium ea at soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                tempore!
              </p>
              <p className="py-4 text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo enim qui libero odio consequatur deleniti minus! Nihil quod fugiat eum quae officia, blanditiis maiores totam magnam libero ab laborum? Lorem ipsum dolor
                sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi.
              </p>
              <p className="py-4 text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, officiis.</p>
            </section>

            <hr />
            <h1 className="text-xl sm:text-2xl font-semibold p-7 text-center">COMPANY OVERVIEW</h1>
            <hr />
            <TimelineSec />
            <hr />
            <h1 className="text-xl sm:text-2xl font-semibold p-7 text-center">OUR TEAM</h1>
            <hr />
            <TeamAbout />
            <hr />
            <h1 className="text-xl sm:text-2xl font-semibold p-7 text-center">CULTURE AT GAMESTART</h1>
            <hr />
            <CultureSec />
          </div>
        </div>
      </div>
    </div>
  );
}
