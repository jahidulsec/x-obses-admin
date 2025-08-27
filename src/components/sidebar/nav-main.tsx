"use client";

import React from "react";
import {
  SidebarMenu,
  SidebarMenuContainer,
  SidebarToggleText,
  SidebarTopSection,
} from "./sidebar";
import { Logo } from "../logo/logo";
import { navList } from "@/lib/data";
import Link from "next/link";

const NavMain = () => {
  return (
    <SidebarTopSection>
      {/* logo section */}
      <Link href={"/dashboard"} className="logo flex gap-2 items-center px-3">
        <Logo />
        <SidebarToggleText className={`text-nowrap font-semibold text-xl h-[24px] text-primary`}>
          Obese
        </SidebarToggleText>
      </Link>

      {/* menu container */}
      <SidebarMenuContainer>
        {navList.map((item) => (
          <SidebarMenu
            key={item.id}
            button={{ title: item.title, icon: item.icon, url: item.url }}
          />
        ))}
      </SidebarMenuContainer>
    </SidebarTopSection>
  );
};

export { NavMain };
