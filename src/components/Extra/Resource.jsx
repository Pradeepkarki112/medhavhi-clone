import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  video,
  resource,
  fstatus,
  lstatus,
  frequest,
  lrequest,
} from "../../assets/image/index";

export default function Resource() {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv % 3) + 1); // Cycle through 1, 2, 3
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-5 lg:px-32 py-5 md:py-20">
      <div className="w-full h-full flex items-center flex-col-reverse gap-[120px] lg:flex-row-reverse">
        {/* right part */}
        <div className="w-full  sm:w-fit flex items-center">
          <div className="w-full">
            <div className="w-full">
              {currentDiv === 1 && (
                <div className="relative bg-greyblueColor overflow-hidden rounded-2xl w-full h-[320px] xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px]">
                  <div className="flex flex-col items-center justify-end">
                    <div className="absolute mt-auto top-[30px] md:top-[60px] w-[250px] xs:w-[290px] h-[120px] md:h-[150px] leftanimation">
                      <source src={video} type="video/mp4" />
                    </div>
                    <div className="absolute overflow-hidden h-[500px] -bottom-[360px] xs:-bottom-[300px] md:-bottom-[250px] w-[250px] xs:w-[290px] topanimation">
                      <img src={resource} alt="resource" />
                    </div>
                  </div>
                </div>
              )}

              {currentDiv === 2 && (
                <div className="relative bg-greyblueColor overflow-hidden rounded-2xl w-full h-[320px] xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px]">
                  <div className="flex flex-col items-center justify-end">
                    <div className="absolute mt-auto top-[30px] md:top-[60px] w-[250px] xs:w-[290px] h-[120px] md:h-[150px] leftanimation">
                      <img src={fstatus} alt="fstatus" />
                    </div>
                    <div className="absolute overflow-hidden -bottom-[360px] xs:-bottom-[300px] md:-bottom-[250px] h-[500px] w-[250px] xs:w-[290px] topanimation">
                      <img src={lstatus} alt="lstatus" />
                    </div>
                  </div>
                </div>
              )}

              {currentDiv === 3 && (
                <div className="relative bg-greyblueColor overflow-hidden rounded-2xl w-full h-[320px] xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px]">
                  <div className="flex flex-col items-center justify-end">
                    <div className="absolute mt-auto top-[30px] md:top-[60px] w-[250px] xs:w-[290px] h-[120px] md:h-[150px] leftanimation">
                      <img src={frequest} alt="frequest" />
                    </div>
                    <div className="absolute overflow-hidden -bottom-[360px] xs:-bottom-[300px] md:-bottom-[250px] h-[500px] w-[250px] xs:w-[290px] topanimation">
                      <img src={lrequest} alt="lrequest" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* left part */}
        <div className="w-full flex flex-col">
          <p className="text-primaryColor mb-2 md:mb-4 font-semibold tracking-wide text-xs sm:text-sm md:text-base md:leading-tall">
            Class & resource management
          </p>
          <div className="font-bold tracking-wide mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl md:leading-[44px]">
            Streamlining Operations with Efficient Class and Resource Management
          </div>
          <div className="flex flex-col w-full mt-6 gap-2">
            <h1 className="text-blackColor font-bold tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Assignments
            </h1>
            <p className="text-secondaryColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Seemlessly create, distribute, and evaluate assignments, fostering
              a productive and engaging learning environment.
            </p>
            <div className="w-1/2 h-1 bg-primaryColor rounded-full"></div>
          </div>

          <div className="w-full flex flex-col gap-2 mt-6">
            <h1 className="font-bold text-blackColor text-xs sm:text-sm md:text-base tracking-wide leading-5 md:leading-tall">
              Videos & Resources
            </h1>
            <p className="text-secondaryColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Effortlessly organize, store, and distribute videos, documents,
              and other learning resources, creating a dynamic and engaging
              learning environment.
            </p>
            <div className="w-1/2 h-1 bg-primaryColor rounded-full"></div>
          </div>

          <div className="w-full flex flex-col gap-2 mt-6">
            <h1 className="font-bold text-blackColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Doubts Clearance
            </h1>
            <p className="text-secondaryColor tracking-wide text-xs sm:text-sm md:text-base leading-5 md:leading-tall">
              Robust doubt clearance spaces and sessions, providing students
              with collaborative platforms to seek clarification and enhance
              their understanding.
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
