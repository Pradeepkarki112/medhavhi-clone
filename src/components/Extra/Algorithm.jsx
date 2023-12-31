import React from "react";
import { Link } from "react-router-dom";
import { profile, chat } from "../../assets/image/index";

export default function Algorithm() {
  return (
    <div className="w-full px-4 lg:px-32 sm:my-12 md:pb-20">
      <div className=" w-full h-full flex items-center flex-col-reverse gap-28 xl:gap-[120px] lg:flex-row">
        {/* left part */}
        <div className="w-full flex items-center sm:w-fit">
          <div className="w-full">
            <div className="relative bg-greyblueColor w-full h-80 overflow-hidden  rounded-2xl sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px]">
              <div className="flex flex-col items-center justify-end">
                <div className="absolute mt-auto top-8 sm:top-[90px] w-[250px] sm:w-[320px] h-[73px] leftanimation">
                  <img src={profile} alt="profile" />
                </div>
                <div className="absolute sm:h-[700px] h-[600px] overflow-hidden md:-bottom-[400px] -bottom-[390px] sm:-bottom-[470px] w-[250px] sm:w-[310px] topanimation">
                  <img src={chat} alt="online" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="flex flex-col w-full">
          <div className="text-primaryColor font-semibold mb-2 md:mb-4 text-sm sm:text-sm md:text-base md:leading-tall tracking-wide">
            Create Algorithm Assisted Routine
          </div>
          <div className="font-bold mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl md:leading-[44px] tracking-tight">
            Experience the power of algorithm-assisted routine creation
          </div>
          <p className=" text-secondaryColor mb-5 md:mb-[44px] tracking-wider leading-5 md:leading-[25px] text-sm sm:text-sm md:text-base lg:text-sm xl:text-base">
            Our school management system introduces the innovative "Create
            Algorithm Assisted Routine" feature, designed to simplify and
            optimize the process of creating and managing school timetables. By
            leveraging advanced algorithms and intelligent scheduling
            techniques, this feature revolutionizes the way school
            administrators and staff handle routine creation.
          </p>
          <div className="mb-3 md:mb-6">
            <button className="bg-primaryColor text-whiteColor rounded-lg shadow-md font-medium px-8 py-[12px] text-sm sm:text-sm md:text-base md:leading-tall tracking-[0.06em]">
              <Link to="/register">Get Started</Link>
            </button>
          </div>

          <div className="text-blackColor border-t-2 pt-3 md:pt-6 mb-2 md:mb-4 text-sm sm:text-sm md:text-base leading-5 md:leading-[26px] tracking-wide">
            “Routine Management used to be the most tedious task before, but now
            with the Medhavhi Automated Routine Management System managing
            teachers has been so much easier. All thanks to Medhavhi.”
          </div>
          <h1 className="text-blackColor leading-[26px] tracking-wide font-bold md:mb-1 text-xs sm:text-sm md:text-base">
            Sunita Nuepane Silwal
          </h1>
          <p className="text-greyColor font-medium text-xs sm:text-xs md:text-sm">
            Padma Shree College
          </p>
        </div>
      </div>
    </div>
  );
}
