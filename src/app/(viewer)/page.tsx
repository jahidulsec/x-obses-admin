import HeroSection from "@/features/home/components/hero-section";
import MarathonSection from "@/features/home/components/marathon-section";
import Navbar from "@/features/home/components/navbar";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-6">
        <HeroSection />
        <MarathonSection />
      </main>
    </>
  );
}
