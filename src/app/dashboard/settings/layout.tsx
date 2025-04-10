import HeaderSection from "@/features/settings/components/header";
import React, { PropsWithChildren } from "react";

export default function SettingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeaderSection />
      {children}
    </>
  );
}
