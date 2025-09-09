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
import React, { Suspense, useState } from "react";
import { BlogForm } from "./form";
import { SearchForm } from "@/components/search/search";
import Link from "next/link";

export default function HeaderSection() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const blog = navList.filter((item) => item.url === pathname)?.[0];

  return (
    <>
      <TableHeaderSection>
        <TableHeaderSectionTitle>
          <blog.icon />
          {blog?.title ?? "Dashboard"}
        </TableHeaderSectionTitle>

        <div className="flex items-center gap-3 flex-wrap">
          {/* search section */}
          <Suspense>
            <SearchForm />
          </Suspense>
          <Button
            variant={"outline"}
            className="hover:border-primary hover:bg-transparent"
            // onClick={() => setOpen(true)}
            asChild
          >
            <Link href={`/dashboard/blog/add`}>
              <Plus className="text-primary" />
              <span className="hidden sm:block">Add blog</span>
            </Link>
          </Button>
        </div>
      </TableHeaderSection>
    </>
  );
}
