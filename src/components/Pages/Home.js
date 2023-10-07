import React from "react";
import Footer from "../Extra/Footer";
import Navbar from "./../Extra/Navbar";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <Navbar />
      <div className="text-center font-bold text-primaryColor">Main Body</div>
      <Footer />
    </div>
  );
}
