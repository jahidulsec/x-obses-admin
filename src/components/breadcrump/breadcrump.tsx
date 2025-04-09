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

const Breadcrump = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  const crumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment.replace(/-/g, " "));

    return { label, href };
  });

  return (
    // <div className="text-sm text-muted-foreground">
    //   <ol className="flex space-x-2">
    //     <li>
    //       <Link href="/" className="hover:underline">
    //         Home
    //       </Link>
    //     </li>
    //     {crumbs.map((crumb, index) => (
    //       <li key={crumb.href} className="flex items-center space-x-2">
    //         <span>/</span>
    //         {index === crumbs.length - 1 ? (
    //           <span className="text-foreground font-medium">{crumb.label}</span>
    //         ) : (
    //           <Link href={crumb.href} className="hover:underline">
    //             {crumb.label}
    //           </Link>
    //         )}
    //       </li>
    //     ))}
    //   </ol>
    // </div>
    <BreadcrumbUi>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
