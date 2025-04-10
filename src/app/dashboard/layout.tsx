import { AppNavbar } from "@/components/sidebar/app-navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarContentContainer,
  SidebarProvider,
} from "@/components/sidebar/sidebar";
import React, { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      {/* sidebar */}
      <AppSidebar />

      {/* main content */}
      <SidebarContentContainer>
        <AppNavbar />
        <main className="px-4 flex flex-col gap-5">{children}</main>
      </SidebarContentContainer>
    </SidebarProvider>
  );
}
