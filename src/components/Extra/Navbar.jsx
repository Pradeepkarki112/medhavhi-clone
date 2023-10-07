import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import medhavhi from "./../../assets/logo-medhavhi.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-whiteColor sticky top-0">
      <div className=" flex justify-between items-center py-3 px-5 lg:px-32">
        <div>
          <img src={medhavhi} alt="medhavhi" />
        </div>
        <div className="hidden lg:flex items-center gap-10 text-smallSize font-semibold text-base tracking-wider">
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div className="text-primaryColor shadow-md bg-whiteColor px-9 py-3 rounded-lg">
            <Link to="/register">Sign Up</Link>
          </div>
        </div>

        <div className="flex lg:hidden text-mediumSize">
          <VscThreeBars />
        </div>
      </div>
    </div>
  );
}
