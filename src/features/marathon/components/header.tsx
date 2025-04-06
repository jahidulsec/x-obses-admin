"use client";

import {
  TableHeaderSection,
  TableHeaderSectionTitle,
} from "@/components/table/table";
import { Button } from "@/components/ui/button";
import { navList } from "@/lib/data";
import { Blocks, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderSection() {
  const pathname = usePathname();
  const marathon = navList.filter((item) => item.url === pathname)?.[0];

  return (
    <TableHeaderSection>
      <TableHeaderSectionTitle>
        <marathon.icon />
        {marathon?.title ?? "Dashboard"}
      </TableHeaderSectionTitle>
      <Button
        variant={"outline"}
        size={"sm"}
        className="hover:border-primary hover:bg-transparent"
      >
        <Plus className="text-primary" />
        <span className="hidden sm:block">Add marathon</span>
      </Button>
    </TableHeaderSection>
  );
}
