import React from "react";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { medhavhi } from "../../assets/image/index";
import SocialLogo from "../../assets/icons/SocialLogo";

// import { AiFillTwitterCircle } from "react-icons/ai";
// import { BiLogoTiktok } from "react-icons/bi";
// import { BsFacebook } from "react-icons/bs";
// import { FaInstagramSquare } from "react-icons/fa";

const sections = [
  {
    title: "Who we are",
    links: [
      { text: "Home", href: "/" },
      { text: "Our Story", href: "/" },
      { text: "Features", href: "/" },
      { text: "Discover", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/" },
      { text: "Contact Us", href: "/" },
      { text: "FAQs", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="px-5 lg:px-32 py-5 md:py-14">
      <div className="flex justify-between items-center flex-col sm:flex-row border-t-2 sm:items-start py-10 gap-8 lg:pr-20">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="text-primaryColor text-base leading-tall text-center mb-4">
              {section.title}
            </div>
            <div className="sm:items-start sm:justify-start grid grid-cols-2 gap-x-8 gap-y-2 items-center justify-center font-medium text-sm md:text-base md:leading-tall ">
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center gap-4 sm:items-start sm:justify-start">
          <div className="text-primaryColor text-base text-center leading-tall ">
            Socials
          </div>

          {/* <div className="flex items-center justify-center gap-6 font-medium md:text-base md:leading-tall sm:items-start sm:justify-start">
            <BsFacebook className="h-6 w-6" />
            <FaInstagramSquare className="h-6 w-6 rounded-full" />
            <BiLogoTiktok className="h-6 w-6 bg-blackColor text-gray-400 p-1 rounded-full" />
            <AiFillTwitterCircle className="h-7 w-7" />
          </div> */}

          <SocialLogo />
        </div>
      </div>

      <div className="md:py-14 xl:pr-20 ">
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-8">
            <div className="relative w-[169px] h-[40px]">
              <img src={medhavhi} alt="medhavhi" />
            </div>
            <div className="flex flex-col items-center xl:flex-row md:gap-8 text-xs md:text-[15px] md:leading-tall text-blackColor">
              <div className="mb-8 md:mb-0">
                © 2023 Medhavhi. All right reserved.
              </div>
              <div className="text-greyColor flex flex-col items-center sm:flex-row sm:gap-8">
                <Link to="/privacy-policy" className="mb-4 sm:mb-0">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-fit flex flex-col justify-center items-center lg:justify-start lg:items-start my-8 gap-4 lg:gap-6">
            <p className="font-medium leading-tall text-base">
              Stay Informed with our Newsletter
            </p>
            <form className="relative w-full flex items-center sm:w-fit">
              <input
                type="text"
                className="w-full rounded-full placeholder:text-greyColor bg-creamColor text-sm px-6 py-4 outline-none focus:outline-none sm:w-[600px] lg:w-[400px]"
                placeholder="Enter your email address"
                name="email"
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
