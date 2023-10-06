import React from "react";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { BiLogoTiktok } from "react-icons/bi";
// import { BsFacebook } from "react-icons/bs";
// import { FaInstagramSquare } from "react-icons/fa";

import medhavhi from "./../../assets/logo-medhavhi.png";
import { LuMoveRight } from "react-icons/lu";

const sections = [
  {
    title: "Who we are",
    links: [
      { text: "Home", href: "/" },
      { text: "Our story", href: "/" },
      { text: "Features", href: "/" },
      { text: "Discover", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/" },
      { text: "Contact us", href: "/" },
      { text: "FAQs", href: "/" },
    ],
  },
];

const MediaIcon = () => {
  return (
    <div className=" font-medium capitalize md:text-base md:leading-[22px] sm:items-start sm:justify-start flex items-center justify-center gap-6">
      {/* <BsFacebook className="h-6 w-6" />
      <FaInstagramSquare className="h-6 w-6 rounded-full" />
      <BiLogoTiktok className="h-6 w-6 bg-blackColor text-gray-400 p-1 rounded-full" />
      <AiFillTwitterCircle className="h-7 w-7" /> */}

      <a href="https://www.facebook.com/medhavhi">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <g clipPath="url(#facebook1_svg__a)">
            <path
              d="M24 12c0-6.628-5.372-12-12-12S0 5.372 0 12s5.372 12 12 12c.07 0 .14 0 .21-.005v-9.337H9.634v-3.005h2.578V9.441c0-2.564 1.566-3.961 3.853-3.961 1.097 0 2.04.08 2.311.117v2.681H16.8c-1.242 0-1.486.59-1.486 1.458v1.912h2.977l-.39 3.005h-2.587v8.883C20.33 22.096 24 17.48 24 12Z"
              fill="#1E1E1E"
            ></path>
          </g>
          <defs>
            <clipPath id="facebook1_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>

      <a href="https://www.instagram.com/medhavhi/">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <g clipPath="url(#instagram1_svg__a)" fill="#1E1E1E">
            <path d="M12 14.46a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"></path>
            <path d="M12 .281C5.528.281.281 5.528.281 12c0 6.472 5.247 11.719 11.719 11.719 6.472 0 11.719-5.247 11.719-11.719C23.719 5.528 18.472.281 12 .281Zm7.24 14.697c-.056 1.115-.37 2.213-1.181 3.016-.82.811-1.924 1.114-3.049 1.17H8.99c-1.125-.056-2.23-.358-3.049-1.17-.812-.803-1.125-1.901-1.181-3.016V9.022c.056-1.115.37-2.213 1.181-3.017.82-.81 1.924-1.113 3.049-1.168h6.02c1.125.055 2.23.357 3.049 1.168.812.804 1.125 1.902 1.181 3.017v5.956Z"></path>
            <path d="M14.934 6.194c-1.467-.04-4.402-.04-5.869 0-.763.02-1.628.21-2.172.791-.565.604-.778 1.334-.8 2.15-.038 1.432 0 5.73 0 5.73.025.816.235 1.545.8 2.15.544.58 1.41.77 2.172.79 1.467.041 4.402.041 5.869 0 .763-.02 1.628-.21 2.172-.79.565-.605.778-1.334.8-2.15v-5.73c-.022-.816-.235-1.546-.8-2.15-.544-.58-1.41-.77-2.172-.791Zm-2.935 9.62a3.815 3.815 0 1 1 0-7.63 3.815 3.815 0 0 1 0 7.63Zm3.831-6.841a.763.763 0 1 1 0-1.526.763.763 0 0 1 0 1.526Z"></path>
          </g>
          <defs>
            <clipPath id="instagram1_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>

      <a href="https://www.tiktok.com/@medhavhi">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <g clipPath="url(#tiktok1_svg__a)">
            <path
              d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0Zm6.02 9.182v1.624a5.656 5.656 0 0 1-3.47-1.179l.012 5.002a4.189 4.189 0 0 1-1.256 2.98 4.277 4.277 0 0 1-3.035 1.243 4.291 4.291 0 0 1-3.034-1.242 4.192 4.192 0 0 1-1.249-3.266 4.197 4.197 0 0 1 1.059-2.532 4.29 4.29 0 0 1 3.224-1.442c.218 0 .434.016.645.048v2.271a2.027 2.027 0 0 0-2.668 1.952c.01.725.407 1.358.99 1.707a2.017 2.017 0 0 0 1.678.185 2.025 2.025 0 0 0 1.392-1.922l.002-3.349V5.148h2.238a3.46 3.46 0 0 0 3.466 3.431h.006v.603Z"
              fill="#1E1E1E"
            ></path>
          </g>
          <defs>
            <clipPath id="tiktok1_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>

      <a href="https://twitter.com/MedhaVhi">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <g clipPath="url(#twitter1_svg__a)">
            <path
              d="M12 0C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.383-12-12-12Zm5.353 9.254c.006.118.008.238.008.358 0 3.65-2.777 7.857-7.859 7.857a7.812 7.812 0 0 1-4.233-1.24 5.577 5.577 0 0 0 4.089-1.143 2.765 2.765 0 0 1-2.58-1.919 2.784 2.784 0 0 0 1.247-.046 2.763 2.763 0 0 1-2.215-2.708v-.035a2.75 2.75 0 0 0 1.25.345 2.76 2.76 0 0 1-1.228-2.298c0-.507.136-.982.374-1.39a7.843 7.843 0 0 0 5.692 2.887 2.762 2.762 0 0 1 4.707-2.52 5.513 5.513 0 0 0 1.755-.67 2.774 2.774 0 0 1-1.216 1.528 5.491 5.491 0 0 0 1.586-.434 5.556 5.556 0 0 1-1.377 1.428Z"
              fill="#1E1E1E"
            ></path>
          </g>
          <defs>
            <clipPath id="twitter1_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="px-5 lg:px-32 py-5 md:py-14">
      <div className="border-t-2 flex justify-between items-center sm:items-start flex-col sm:flex-row gap-8 py-10 lg:pr-[81px]">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="text-base text-primaryColor leading-[22px] text-center">
              {section.title}
            </div>
            <div className="font-medium capitalize text-sm md:text-base md:leading-[22px] sm:items-start sm:justify-start grid grid-cols-2 gap-x-8 gap-y-2 items-center justify-center">
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-4 ">
          <div className="text-base text-primaryColor text-center leading-[22px] ">
            Socials
          </div>
          <MediaIcon />
        </div>
      </div>
      <div className="md:py-14 xl:pr-20 ">
        <div className="flex items-center flex-col-reverse lg:flex-row justify-center lg:justify-between">
          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-8">
            <div className="relative w-[169px] h-[40px]">
              <img src={medhavhi} alt="medhavhi" />
            </div>
            <div className="flex flex-col xl:flex-row md:gap-8 items-center text-[#0C0C0C] text-xs md:text-[15px] md:leading-[21px]">
              <div className="mb-8 md:mb-0">
                © 2023 Medhavhi. All right reserved.
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-8 items-center">
                <div className="mb-4 sm:mb-0 text-[#7D7D7D]">
                  <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div className="text-[#7D7D7D]">
                  <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-fit justify-center lg:justify-start my-8 items-center lg:items-start flex-col gap-4 lg:gap-6">
            <p className="font-medium capitalize text-base leading-[22.4px]">
              Stay Informed with our Newsletter
            </p>
            <form className="w-full sm:w-fit relative flex items-center">
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className=" rounded-full w-full px-6 bg-[#F4F4F5] text-sm placeholder:text-[#71717A] py-4 sm:w-[600px] lg:w-[400px] outline-none focus:outline-none"
                autoComplete="email"
              />
              <button type="submit" className="absolute right-6">
                <LuMoveRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
