import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import medhavhi from "./../../assets/logo-medhavhi.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-whiteColor shadow-sm sticky z-10 top-0">
      <div className=" flex justify-between items-center py-3 px-5 lg:px-32">
        <Link to="/">
          <img src={medhavhi} alt="medhavhi" />
        </Link>
        <div className="hidden lg:flex items-center gap-1 text-smallSize font-semibold text-base tracking-wider">
          <Link to="/login" className="px-9 py-3">
            Login
          </Link>
          <Link
            to="/register"
            className="text-primaryColor shadow-sm bg-whiteColor px-9 py-3 rounded-lg"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex lg:hidden text-mediumSize">
          <VscThreeBars />
        </div>
      </div>
    </div>
  );
}
