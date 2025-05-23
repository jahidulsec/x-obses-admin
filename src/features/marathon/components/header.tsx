"use client";

import {
  TableHeaderSection,
  TableHeaderSectionTitle,
} from "@/components/table/table";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navList } from "@/lib/data";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MarathonForm } from "./form";

export default function HeaderSection() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const marathon = navList.filter((item) => item.url === pathname)?.[0];

  return (
    <>
      <TableHeaderSection>
        <TableHeaderSectionTitle>
          <marathon.icon />
          {marathon?.title ?? "Dashboard"}
        </TableHeaderSectionTitle>
        <Button
          variant={"outline"}
          size={"sm"}
          className="hover:border-primary hover:bg-transparent"
          onClick={() => setOpen(true)}
        >
          <Plus className="text-primary" />
          <span className="hidden sm:block">Add marathon</span>
        </Button>
      </TableHeaderSection>

      {/* form modal */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add marathon</SheetTitle>
          </SheetHeader>

          {/* form */}
          <div className="mt-5">
            <MarathonForm onClose={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
