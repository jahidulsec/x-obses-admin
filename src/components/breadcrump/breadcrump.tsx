"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as BreadcrumbUi,
} from "../ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { titleCase } from "@/lib/formatters";
import { useIsMobile } from "@/hooks/use-mobile";

const Breadcrump = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const pathSegments = pathname.split("/").filter(Boolean);

  const crumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment.replace(/-/g, " "));

    return { label, href };
  });

  return (
    <BreadcrumbUi>
      <BreadcrumbList>
        {!isMobile && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {crumbs.length > 3 && (
              <>
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {crumbs.slice(1, crumbs.length - 1).map((item, index) => (
                        <DropdownMenuItem key={index} asChild>
                          <Link href={item.href}>{titleCase(item.label)}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
          </>
        )}

        <BreadcrumbItem>
          <BreadcrumbPage>
            {titleCase(crumbs[`${crumbs.length - 1}`].label)}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbUi>
  );
};

export { Breadcrump };
