"use client";

import { cn } from "@/lib/utils";
import { Admin } from "@/types/admin";
import { SingleResponseType } from "@/types/response";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function TabSection({
  admin,
}: {
  admin: SingleResponseType<Admin>["data"];
}) {
  return (
    <div className="flex items-center gap-5 mt-3 bg-muted/35 p-2 pb-0 rounded-lg">
      <TabItem href="/dashboard/settings" title="Profile" />
      {admin?.data.role === "superadmin" && (
        <TabItem href="/dashboard/settings/admins" title="Admins" />
      )}
    </div>
  );
}

const TabItem = ({
  href,
  title,
  className,
  ...props
}: React.ComponentProps<"a">) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "font-semibold pb-2 border-b-2 text-muted-foreground hover:border-primary data-[state=true]:text-foreground data-[state=true]:border-primary transition-colors duration-300",
        className
      )}
      data-state={pathname === href}
      href={href ?? ""}
      {...props}
    >
      {title}
    </Link>
  );
};
