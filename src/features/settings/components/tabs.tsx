"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Admin } from "@/types/admin";
import { SingleResponseType } from "@/types/response";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AdminForm } from "./form/admin-form";

export default function TabSection({
  admin,
}: {
  admin: SingleResponseType<Admin>["data"];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mt-3 bg-muted/35 p-2 pb-0 rounded-lg flex justify-between items-center gap-5">
      <div className="flex items-center gap-5">
        <TabItem href="/dashboard/settings" title="Profile" />
        {admin?.data.role === "superadmin" && (
          <TabItem href="/dashboard/settings/admins" title="Admins" />
        )}
      </div>

      {/* add admin button */}
      {admin?.data.role === "superadmin" &&
        pathname === "/dashboard/settings/admins" && (
          <Button
            variant={"outline"}
            size={"sm"}
            className="hover:border-primary hover:bg-transparent mb-2"
            onClick={() => setOpen(true)}
          >
            <Plus className="text-primary" />
            <span className="hidden sm:block">Add Admin</span>
          </Button>
        )}

      {/* admin form modal */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Admin</SheetTitle>
          </SheetHeader>

          {/* form */}
          <div className="mt-5">
            <AdminForm onClose={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
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
