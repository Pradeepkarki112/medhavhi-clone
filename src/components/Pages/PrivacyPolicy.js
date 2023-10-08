import React from "react";
import Navbar from "../Extra/Navbar";
import Discover from "./../Extra/Discover";
import Download from "./../Extra/Download";
import Footer from "../Extra/Footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div>Privacy Policy for Medhavhi</div>
      <div className="bg-backgroundColor">
        <Discover />
        <Download />
        <Footer />
      </div>
    </div>
  );
}
