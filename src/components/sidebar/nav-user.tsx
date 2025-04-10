"use client";

import React from "react";
import { SidebarBottomSection, SidebarMenu } from "./sidebar";
import { Bolt, LogOut } from "lucide-react";

const NavUser = () => {
  const navUserList = [
    {
      id: 1,
      title: "Settings",
      key: "settings",
      url: "/dashboard/settings",
      icon: Bolt,
    },
    {
      id: 2,
      title: "Logout",
      key: "logout",
      icon: LogOut,
    },
  ];

  return (
    <SidebarBottomSection>
      {navUserList.map((item) => (
        <SidebarMenu
          key={item.id}
          button={{ title: item.title, icon: item.icon, url: item.url }}
        />
      ))}
    </SidebarBottomSection>
  );
};

export { NavUser };
