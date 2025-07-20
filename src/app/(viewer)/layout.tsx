import FooterSection from "@/features/home/components/footer-section";
import Navbar from "@/features/home/components/navbar";
import React from "react";

export default function ViewerLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}
