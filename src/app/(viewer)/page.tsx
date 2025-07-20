import { Section } from "@/components/section/section";
import FooterSection from "@/features/home/components/footer-section";
import HeroSection from "@/features/home/components/hero-section";
import MarathonSection from "@/features/home/components/marathon-section";
import Navbar from "@/features/home/components/navbar";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10">
        <HeroSection />
        <Section>
          <ul className="bg-muted rounded-full p-4 flex items-center text-sm gap-5 w-fit mx-auto px-8 first:[&_li]:border-l-0 first:[&_li]:pl-0 [&_li]:pl-4 [&_li]:border-l">
            <li>Plan Setup</li>
            <li>Marathon</li>
            <li>Blog</li>
          </ul>
        </Section>
        <MarathonSection />
      </main>
      <FooterSection />
    </>
  );
}
