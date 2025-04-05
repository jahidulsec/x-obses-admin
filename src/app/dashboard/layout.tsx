import { AppNavbar } from "@/components/sidebar/app-navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  Sidebar,
  SidebarContainer,
  SidebarProvider,
} from "@/components/sidebar/sidebar";
import React, { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      {/* sidebar */}
      <AppSidebar />

      {/* main content */}
      <SidebarContainer>
        <AppNavbar />
        <main className="px-4 min-h-[120vh] bg-red-50">{children}</main>
      </SidebarContainer>
    </SidebarProvider>
  );
}
