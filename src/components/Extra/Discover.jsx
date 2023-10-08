import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";
// import health from "./../../assets/19health.png";
// import school from "./../../assets/20school.png";

export default function Discover() {
  const [hovering, setHovering] = useState(null);

  const mouseEnter = (index) => {
    setHovering(index);
  };

  const mouseLeave = () => {
    setHovering(null);
  };

  const data = [
    {
      image:
        // {health},
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent.5e2bccfa.png&w=640&q=75",
      title: "Why use Medhavhi?",
      date: "12th June 2023",
    },
    {
      image:
        // {school},
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent1.904569d3.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
    {
      image:
        // {health},
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent.5e2bccfa.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },

    {
      image:
        // {school},
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent1.904569d3.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
    {
      image:
        // {health},
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent.5e2bccfa.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
    {
      image:
        // {school},
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent1.904569d3.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
  ];

  return (
    <div className="flex items-center py-5 md:py-8 xl:pt-0 xl:pb-20">
      <div className="w-full">
        <div className="px-5 lg:px-32">
          <div className="text-primaryColor font-semibold leading-tall tracking-wide mb-2 md:mb-3 text-xs sm:text-sm lg:text-base">
            Discover
          </div>
          <div className="text-bold mb-5 md:mb-12 text-2xl md:text-3xl lg:text-4xl lg:leading-[44px] tracking-wide ">
            Discover something awesome
          </div>
        </div>

        <div className="flex w-full h-full overflow-y-auto hidescrollbar gap-2 md:gap-4 px-5 lg:px-32">
          {data.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => mouseEnter(index)}
              onMouseLeave={mouseLeave}
              className="relative w-full h-fit"
            >
              <div className="relative w-[290px] h-[180px] sm:w-[400px] xl:w-[560px] sm:h-[270px] xl:h-full cursor-pointer">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={item.image}
                  alt="discoverimg"
                />
              </div>

              <div
                className={
                  hovering === index
                    ? "absolute flex flex-col text-whiteColor px-6 gap-2  top-2 sm:top-4 mdd:top-5 xl:top-7 fastdownanimation"
                    : "absolute flex flex-col text-whiteColor px-6 gap-2 -top-20 h-0 opacity-0"
                }
              >
                <p className="flex font-semibold text-xs sm:text-sm md:text-base xl:text-2xl md:leading-tall xl:leading-[28px] tracking-wide">
                  {item.title}
                </p>
                <p className="text-[8px] sm:text-[10px] md:text-xs xl:text-sm md:leading-4">
                  {item.date}
                </p>
              </div>

              <div
                className={
                  hovering === index
                    ? "absolute px-6 pt-6 bottom-8 xs:bottom-12 xl:bottom-10 fastupanimation"
                    : "absolute px-6 pt-6 bottom-0 opacity-0"
                }
              >
                <button className="flex items-center gap-5 bg-white/80 rounded-full shadow-md px-6 py-2 text-[10px] sm:text-xs mdd:text-sm xl:text-[18px] lg:leading-[25px] tracking-[0.03em]">
                  <span> Learn more</span>
                  <LuMoveRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
