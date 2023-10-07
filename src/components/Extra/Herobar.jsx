import React from "react";
import { Link } from "react-router-dom";
import appstore from "./../../assets/logo-appstore.png";
import playstore from "./../../assets/logo-playstore.png";
import mobile from "./../../assets/1mobile.png";
import dashboard from "./../../assets/2dashboard.png";

export default function Herobar() {
  return (
    <div className="py-10 px-5 mmd:pt-[120px] mmd:pb-44 lg:px-32">
      <div className="relative grid gap-12 md:gap-5 lg:gap-10 xl:gap-28 lg:grid-cols-2">
        {/* left part */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold tracking-tight text-2xl sm:text-3xl lg:text-largeSize xl:leading-[48px]">
            Medhavhi: School & Learning Management System
          </h1>
          <p className=" text-secondaryColor text-sm sm:text-sm md:text-base tracking-tight sm:leading-tall">
            Medhavhi, the all-in-one platform connecting school, students,
            teachers, and parents, simplifying education, communication, and
            collaboration for a seamless learning experience.
          </p>

          <div className="flex mt-4 md:mt-10 gap-2 sm:gap-3">
            <button className="bg-primaryColor text-white rounded-lg shadow-md font-medium px-8 py-3 text-sm sm:text-sm md:text-base md:leading-tall tracking-wider">
              <Link to="/register">Get Started</Link>
            </button>
            <button className="bg-white text-primaryColor rounded-lg shadow-sm font-medium px-8 py-3 text-sm sm:text-sm md:text-base md:leading-tall tracking-wider">
              <Link to="/login">Create School</Link>
            </button>
          </div>
          <div className="flex items-center mt-1 gap-2 sm:mt-2 md:gap-4 ">
            <span className="text-secondaryColor tracking-wide text-sm md:text-sm leading-short">
              Also Available on
            </span>
            <div className="flex">
              <img
                className="object-cover h-8 w-8"
                src={appstore}
                alt="appstore"
              />
              <img
                className="object-cover h-8 w-8"
                src={playstore}
                alt="playstore"
              />
            </div>
          </div>
        </div>

        {/* right part */}
        <div className=" relative items-center overflow-hidden md:overflow-visible h-60 sm:h-72 md:h-fit">
          <div className="absolute flex gap-2 -top-5 md:gap-4 lg:gap-6">
            <div className="relative rounded-xl shadow-sm overflow-hidden h-[230px] sm:h-[400px] md:h-[350px] xl:h-[400px] w-[90px] sm:w-[192px] md:w-[150px] xl:w-[192px]">
              <img
                className="object-fill h-full w-full"
                src={mobile}
                alt="mobile"
              />
            </div>
            <div className="relative rounded-xl shadow-sm overflow-hidden h-[230px] sm:h-[400px] md:h-[350px] xl:h-[400px] w-[420px] sm:w-[640px] md:w-[410px] xl:w-[640px]">
              <img
                className="object-fill h-full w-full"
                src={dashboard}
                alt="dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
