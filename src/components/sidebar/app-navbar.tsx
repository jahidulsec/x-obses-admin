"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { PanelLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarContext } from "./sidebar";
import { usePathname } from "next/navigation";
import { navList } from "@/lib/data";

const AppNavbar = () => {
  const { onToggle } = useSidebarContext();
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-3 py-3 border-b mb-3 px-4 sticky top-0 bg-background">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={onToggle}
        className="p-0 w-4 h-4"
      >
        <PanelLeft />
        <span className="sr-only">Toggle</span>
      </Button>

      <Separator orientation="vertical" className="h-5" />

      <h2 className="font-semibold">
        {navList.filter((item) => item.url === pathname)?.[0]?.title ?? "Dashboard"}
      </h2>
    </nav>
  );
};

export { AppNavbar };
