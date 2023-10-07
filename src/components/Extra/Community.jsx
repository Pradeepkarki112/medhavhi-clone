import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fstudent from "./../../assets/11student.png";
import sstudent from "./../../assets/12student.png";
import tstudent from "./../../assets/13student.png";
import post from "./../../assets/14post.png";
import freply from "./../../assets/15reply.png";
import lreply from "./../../assets/16reply.png";

export default function Community() {
  const [showFirstSection, setShowFirstSection] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFirstSection((prevShowFirst) => !prevShowFirst);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showFirstSection]);
  return (
    <div className=" py-5 md:py-20 w-full lg:px-32 px-5 ">
      <div className=" items-center w-full h-full flex flex-col-reverse gap-[120px] lg:flex-row  ">
        <div className=" flex w-full sm:w-fit items-center ">
          <div className="w-full">
            {showFirstSection && (
              <div className="w-full relative h-[320px] overflow-hidden xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px] bg-[#E2E8F0] rounded-2xl">
                <div className="flex gap-1 xs:gap-2 md:gap-4 h-full justify-end items-center flex-col">
                  <div className="w-[200px] xs:w-[250px] animate-left md:w-[290px] h-[190px] xs:h-[240px] md:h-[280px]">
                    <img src={fstudent} alt="Phase supply" />
                  </div>
                  <div className="flex animate-upward flex-col gap-1">
                    <div className="h-[55px] xs:h-[65px] md:h-[80px] w-[160px] xs:w-[20px] md:w-[240px] ">
                      <img src={sstudent} alt="lorem" />
                    </div>
                    <div className="h-[55px] xs:h-[65px] md:h-[80px] transform duration-1000 w-[160px] xs:w-[200px] md:w-[240px] ">
                      <img src={tstudent} alt="lorem2" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!showFirstSection && (
              <div className="w-full relative h-[320px] overflow-hidden xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px] bg-[#E2E8F0] rounded-2xl">
                <div className="flex h-full gap-1 xs:gap-2 justify-center items-center flex-col">
                  <div className="xs:w-[290px] w-[250px] animate-upward-more h-[65px] xs:h-[72px]">
                    <img src={post} alt="physics" />
                  </div>
                  <div className="h-[65px] xs:h-[72px] animate-upward-more w-[250px] -bottom-[250px] xs:w-[290px] ">
                    <img src={freply} alt="maths" />
                  </div>
                  <div className="h-[65px] xs:h-[72px] animate-upward-more w-[250px] -bottom-[250px] xs:w-[290px] ">
                    <img src={lreply} alt="chemistry" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" w-full flex flex-col ">
          <p className="text-primaryColor font-semibold tracking-wide text-xs sm:text-sm md:text-base md:leading-[22px] mb-2 md:mb-4">
            Connected Learning and Community Engagement
          </p>
          <div className=" text-2xl sm:text-3xl md:text-4xl md:leading-[43px] tracking-wide font-bold mb-4 md:mb-6 ">
            Seamless Online Class, Event, Attendance and Leave management
          </div>
          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-lightBlack leading-5 md:leading-[22px] ">
              Online class & Events
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-SilverColor leading-5 md:leading-[22px] ">
              Effortlessly conduct online classes, manage virtual events, and
              foster meaningful engagement within your school community.
            </p>
            <div className=" w-1/2 bg-newBlue rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-lightBlack leading-5 md:leading-[22px] ">
              Community
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-SilverColor leading-5 md:leading-[22px] ">
              Create a vibrant community network that facilitates seamless
              communication, knowledge exchange, and collaboration among various
              stakeholders.
            </p>
            <div className=" w-1/2 bg-newBlue rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-lightBlack leading-5 md:leading-[22px] ">
              Attendance and Leave Management
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-SilverColor leading-5 md:leading-[22.4px] ">
              Advanced attendance and leave management features, designed to
              simplify administrative tasks and enhance productivity for
              schools.
            </p>
            <div className=" w-1/2 bg-newBlue rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" mt-5 md:mt-12 ">
            <button className=" rounded-lg capitalize font-medium text-xs sm:text-sm md:text-base md:leading-[22px] tracking-wider px-8 py-[13px] bg-primaryColor text-white  ">
              <Link to="/register">Start Using</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
