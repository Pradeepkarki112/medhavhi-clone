import React from "react";
import Navbar from "../Extra/Navbar";
import Discover from "./../Extra/Discover";
import Download from "./../Extra/Download";
import Footer from "./../Extra/Footer";

export default function TermsandCondition() {
  return (
    <div>
      <Navbar />
      <div>Terms and conditions Medhavhi</div>
      <div className="bg-backgroundColor">
        <Discover />
        <Download />
        <Footer />
      </div>
    </div>
  );
}
