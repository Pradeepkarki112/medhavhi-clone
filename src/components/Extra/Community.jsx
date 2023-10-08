import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fstudent from "./../../assets/11student.png";
import sstudent from "./../../assets/12student.png";
import tstudent from "./../../assets/13student.png";
import post from "./../../assets/14post.png";
import freply from "./../../assets/15reply.png";
import lreply from "./../../assets/16reply.png";

export default function Community() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow((prevShowFirst) => !prevShowFirst);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [show]);
  return (
    <div className="w-full px-5 lg:px-32 py-5 md:py-20">
      <div className="w-full h-full flex items-center flex-col-reverse lg:flex-row gap-[120px] xl:gap-[120px]">
        {/* left part */}
        <div className="w-full sm:w-fit flex items-center">
          <div className="w-full">
            {show && (
              <div className="relative w-full h-[320px] overflow-hidden bg-greyblueColor rounded-2xl xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px]">
                <div className="h-full flex flex-col justify-center items-center gap-1 xs:gap-2">
                  <div className="w-[250px] xs:w-[290px] h-[65px] xs:h-[72px] topanimation">
                    <img src={fstudent} alt="fstudent" />
                  </div>
                  <div className="w-[250px] -bottom-[250px] xs:w-[290px] h-[65px] xs:h-[72px] topanimation">
                    <img src={sstudent} alt="sstudent" />
                  </div>
                  <div className="w-[250px] -bottom-[250px] xs:w-[290px] h-[65px] xs:h-[72px] topanimation">
                    <img src={tstudent} alt="tstudent" />
                  </div>
                </div>
              </div>
            )}

            {!show && (
              <div className="relative w-full h-[320px] overflow-hidden bg-greyblueColor rounded-2xl xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px]">
                <div className="flex flex-col items-center justify-end h-full gap-1 xs:gap-2 md:gap-4 ">
                  <div className="w-[200px] xs:w-[250px] md:w-[290px] h-[190px] xs:h-[240px] md:h-[280px] leftanimation">
                    <img src={post} alt="post" />
                  </div>
                  <div className="flex flex-col gap-1 topanimation">
                    <div className="w-[160px] xs:w-[20px] md:w-[240px] h-[55px] xs:h-[65px] md:h-[80px]">
                      <img src={freply} alt="freply" />
                    </div>
                    <div className="w-[160px] xs:w-[200px] md:w-[240px] h-[55px] xs:h-[65px] md:h-[80px] transform duration-1000">
                      <img src={lreply} alt="lreply" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* right part */}
        <div className="w-full flex flex-col">
          <p className="text-primaryColor mb-2 md:mb-4 font-semibold tracking-wide text-xs sm:text-sm md:text-base md:leading-tall">
            Connected Learning and Community Engagement
          </p>
          <div className="font-bold tracking-wide mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl md:leading-[44px]">
            Seamless Online Class, Event, Attendance and Leave management
          </div>
          <div className="flex flex-col w-full mt-6 gap-2">
            <h1 className="text-blackColor font-bold tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Online class & Events
            </h1>
            <p className="text-secondaryColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Effortlessly conduct online classes, manage virtual events, and
              foster meaningful engagement within your school community.
            </p>
            <div className="w-1/2 h-1 bg-primaryColor rounded-full"></div>
          </div>

          <div className="w-full flex flex-col gap-2 mt-6">
            <h1 className="font-bold text-blackColor text-xs sm:text-sm md:text-base tracking-wide leading-5 md:leading-tall">
              Community
            </h1>
            <p className="text-secondaryColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Create a vibrant community network that facilitates seamless
              communication, knowledge exchange, and collaboration among various
              stakeholders.
            </p>
            <div className="w-1/2 h-1 bg-primaryColor rounded-full"></div>
          </div>

          <div className="w-full flex flex-col gap-2 mt-6">
            <h1 className="font-bold text-blackColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Attendance and Leave Management
            </h1>
            <p className="text-secondaryColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Advanced attendance and leave management features, designed to
              simplify administrative tasks and enhance productivity for
              schools.
            </p>
            <div className="bg-primaryColor w-1/2 h-1 rounded-full"> </div>
          </div>

          <div className="mt-5 md:mt-12">
            <button className="bg-primaryColor text-whiteColor rounded-lg font-medium px-8 py-3 text-xs sm:text-sm md:text-base md:leading-tall tracking-wider">
              <Link to="/register">Start Using</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
