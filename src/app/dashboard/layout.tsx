import { AppNavbar } from "@/components/sidebar/app-navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarContentContainer,
  SidebarProvider,
} from "@/components/sidebar/sidebar";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      {/* sidebar */}
      <AppSidebar />

      {/* main content */}
      <SidebarContentContainer>
        <AppNavbar />
        <main className="px-4 flex flex-col gap-5 min-h-[calc(100svh-120px)]">
          {children}
        </main>
        <footer className="text-center text-xs md:text-sm">
          Designed & Developed by{" "}
          <em className="font-bold not-italic">
            <Link href={"https://impalaintech.com"} target="_blank">
              Impala Intech Limited
            </Link>
          </em>
        </footer>
      </SidebarContentContainer>
    </SidebarProvider>
  );
}
