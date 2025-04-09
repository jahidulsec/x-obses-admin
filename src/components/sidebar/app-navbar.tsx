"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { PanelLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarContext } from "./sidebar";
import { Breadcrump } from "../breadcrump/breadcrump";

const AppNavbar = () => {
  const { onToggle } = useSidebarContext();

  return (
    <nav className="flex items-center gap-3 py-3 border-b mb-3 px-4 sticky top-0 bg-background sm:rounded-t-lg z-10">
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

      <Breadcrump />
    </nav>
  );
};

export { AppNavbar };
