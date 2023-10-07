import React from "react";
import Footer from "../Extra/Footer";
import Navbar from "./../Extra/Navbar";
import Herobar from "../Extra/Herobar";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <Navbar />
      <Herobar />
      <Footer />
    </div>
  );
}
