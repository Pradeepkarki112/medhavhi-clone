import React from "react";
import Steps from "../../svg/Steps";

export default function WorkFlow() {
  const work = [
    {
      id: 1,
      desc: "Submit a <br/> form",
    },
    {
      id: 2,
      desc: "Get connected <br/> with us",
    },
    {
      id: 3,
      desc: "Get your school <br/> approved",
    },
    {
      id: 6,
      desc: "Now, Teach, Learn &amp; Connect <br/> Effortlessly.",
    },
    {
      id: 5,
      desc: "Enroll students, teachers,<br/> and parents.",
    },
    {
      id: 4,
      desc: "Setup your <br/> School &amp; Board",
    },
  ];

  return (
    <div className="w-full px-5 lg:px-32">
      <p className="text-primaryColor font-semibold leading-tall tracking-wide mb-3 text-xs sm:text-sm lg:text-base">
        Create School
      </p>
      <h1 className="font-medium leading-[44px] tracking-wide mb-8 text-2xl md:text-3xl lg:text-4xl">
        How it works
      </h1>
      <div className="mb-20">
        <button
          type="button"
          className="bg-primaryColor text-white rounded-lg font-medium leading-tall tracking-wider px-8 py-3 text-xs sm:text-sm md:text-base"
        >
          Create School
        </button>
      </div>
      <div className="relative w-full border-gray-700 border-dashed ml-10 sm:ml-0 sm:grid grid-cols-3 border-l-2 sm:border-l-0">
        <div className="w-full lg:pr-6 sm:absolute">
          <div className="w-full h-full hidden border-gray-700 rounded-r-full border-dashed mr-40 sm:flex md:h-[200px] sm:h-[124px] sm:border-y-2 sm:border-r-2"></div>
        </div>
        {work.map((flow) => (
          <div
            key={flow.id}
            className="w-full relative sm:h-0 h-10 mb-8 sm:mb-[120px] md:mb-[200px]"
          >
            <Steps />
            <div className="absolute flex items-center sm:flex-col sm:items-start -left-[19px] sm:-left-2 gap-5 sm:gap-0 -top-2 md:-top-4 lg:-top-5">
              <div className="w-fit flex items-center justify-center bg-creamColor rounded-full ml-2 lg:ml-0 h-fit lg:w-14 lg:h-14">
                <div className="flex items-center justify-center rounded-full bg-black text-creamColor w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 leading-6 text-xs md:text-base lg:text-xl mb-1 md:mb-3">
                  {flow.id}
                </div>
              </div>
              <div
                className="text-secondaryColor font-thin pl-2 tracking-wide text-xs md:text-[15px] lg:text-[18px] leading-5 md:leading-6"
                dangerouslySetInnerHTML={{ __html: flow.desc }} //treating as a HTML
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
