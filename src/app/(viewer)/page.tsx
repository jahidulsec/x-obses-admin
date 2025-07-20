import HeroSection from "@/features/home/components/hero-section";
import Navbar from "@/features/home/components/navbar";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
