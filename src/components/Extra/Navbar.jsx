import React from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { medhavhi } from "../../assets/image/index";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-whiteColor shadow-sm">
      <div className="flex justify-between items-center px-5 py-3 lg:px-32">
        <Link to="/">
          <img src={medhavhi} alt="medhavhi" />
        </Link>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex items-center text-base font-semibold text-smallSize tracking-wider gap-1">
          <Link to="/login" className="px-9 py-3">
            Login
          </Link>
          <Link
            to="/register"
            className="px-9 py-3 bg-whiteColor text-primaryColor shadow-sm rounded-lg"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex text-mediumSize lg:hidden">
          <VscThreeBars />
        </div>
      </div>
    </div>
  );
}
