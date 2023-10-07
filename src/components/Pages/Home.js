import React from "react";
import Footer from "../Extra/Footer";
import Navbar from "./../Extra/Navbar";
import Herobar from "../Extra/Herobar";
import Algorithm from "../Extra/Algorithm";
import Resource from "./../Extra/Resource";
import Community from "./../Extra/Community";
import WorkFlow from "./../Extra/WorkFlow";
import Discover from "./../Extra/Discover";
import Download from "./../Extra/Download";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <Navbar />
      <Herobar />
      <Algorithm />
      <Resource />
      <Community />
      <WorkFlow />
      <Discover />
      <Download />
      <Footer />
    </div>
  );
}
