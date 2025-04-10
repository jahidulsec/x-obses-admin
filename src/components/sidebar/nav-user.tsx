"use client";

import React, { useTransition } from "react";
import { SidebarBottomSection, SidebarMenu } from "./sidebar";
import { Bolt, LogOut } from "lucide-react";
import { logout } from "@/features/login/actions/login";
import { toast } from "sonner";
import { useRouter } from "next-nprogress-bar";

const NavUser = () => {
  const [pending, startTransition] = useTransition();

  const router = useRouter();

  const navUserList = [
    {
      id: 1,
      title: "Settings",
      key: "settings",
      url: "/dashboard/settings",
      icon: Bolt,
    },
  ];

  return (
    <SidebarBottomSection>
      {navUserList.slice(0, navUserList.length).map((item) => (
        <SidebarMenu
          key={item.id}
          button={{ title: item.title, icon: item.icon, url: item.url }}
        />
      ))}

      <SidebarMenu
        aria-disabled={pending}
        button={{ title: "Logout", icon: LogOut }}
        onClick={() => {
          startTransition(async () => {
            const response = logout();
            toast.promise(response, {
              loading: "Loading...",
              success: (data) => {
                if (!data.success) throw data.error;
                router.replace("/login");
                return data.success;
              },
              error: (data) => {
                return data.error;
              },
            });
          });
        }}
      />
    </SidebarBottomSection>
  );
};

export { NavUser };
