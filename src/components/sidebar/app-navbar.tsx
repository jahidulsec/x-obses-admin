"use client";

import React, { Suspense } from "react";
import { Separator } from "../ui/separator";
import { PanelLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarContext } from "./sidebar";
import { Breadcrump } from "../breadcrump/breadcrump";
import { SearchForm } from "../search/search";

const AppNavbar = () => {
  const { onToggle } = useSidebarContext();

  return (
    <header className="w-full flex justify-between items-center gap-5 py-3 border-b mb-3 px-4 sticky top-0 bg-background sm:rounded-t-lg z-10">
      <nav className="flex items-center gap-3 ">
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

      {/* search section */}
      <Suspense>
        <SearchForm />
      </Suspense>
    </header>
  );
};

export { AppNavbar };
