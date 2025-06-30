import React, { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import MetalGrilles from "../components/Panels/MetalGrilles.jsx";
import MetalSpaces from "../components/MetalSpaces/MetalSpaces.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />
      <MetalGrilles />
      <MetalSpaces />
      <Footer />
    </div>
  );
}
