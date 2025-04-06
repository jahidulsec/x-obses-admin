"use client";

import React from "react";
import { SidebarBottomSection, SidebarMenu } from "./sidebar";
import { Bolt, LogOut } from "lucide-react";

const NavUser = () => {
  return (
    <SidebarBottomSection>
      <SidebarMenu button={{ title: "Settings", icon: Bolt }} />
      <SidebarMenu
        className="text-destructive hover:bg-destructive/15 hover:text-foreground"
        button={{ title: "Logout", icon: LogOut }}
      />
    </SidebarBottomSection>
  );
};

export { NavUser };
