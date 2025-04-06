"use client";

import React, { createContext, useContext, useState } from "react";
import { Layers, PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "../logo/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarContextProps {
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
}

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

const SidebarContext = createContext<SidebarContextProps | null>(null);

const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context)
    throw new Error("useSidebarContext must be used within a SidebarProvider.");

  return context;
};

const SidebarProvider = ({
  children,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const [open, setOpen] = useState(true);

  return (
    <SidebarContext.Provider
      value={{
        open: open,
        onToggle: () => {
          setOpen(!open);
        },
        onOpen: () => setOpen(true),
      }}
    >
      <div
        className="min-h-svh bg-muted/50 flex relative"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

const Sidebar = ({
  children,
  className,
  ...props
}: React.ComponentProps<"aside">) => {
  const { open } = useSidebarContext();

  return (
    <aside
      data-state={open ? "expanded" : "collapsed"}
      className={cn(
        `min-h-svh h-full sticky top-0 data-[state=expanded]:w-[var(--sidebar-width)] w-[var(--sidebar-width-icon)] transition-all duration-300 hidden pt-5 sm:flex flex-col justify-between ${
          !open ? "items-center" : ""
        }`,
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
};

const SidebarContentContainer = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        `w-full bg-background sm:border sm:rounded-lg sm:m-1 shadow-md relative min-h-svh h-full`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const SidebarTopSection = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return <section className={cn("top", className)} {...props} />;
};

const SidebarBottomSection = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return <section className={cn("mb-2", className)} {...props} />;
};

const SidebarMenuContainer = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return <section className={cn("flex flex-col gap-2 my-5", className)} {...props} />;
};

type ButtonPrpos = {
  icon: React.ElementType;
  title: string;
  url?: string;
};

const SidebarMenu = ({
  className,
  button,
  ...props
}: React.ComponentProps<"a"> & { button: ButtonPrpos }) => {

  const pathname = usePathname()

  return (
    <Link
      role="button"
      href={button.url || "#"}
      className={cn(
        "flex items-center gap-2 border border-transparent hover:border-primary hover:bg-muted hover:text-muted-foreground rounded-lg p-2 mx-1.5 group transition-all duration-300",
        button.url === pathname ? "bg-primary text-primary-foreground" : "",
        className
      )}
      {...props}
    >
      <button.icon className="group-hover:text-primary transition-colors duration-300 min-w-4 w-4" />
      <SidebarToggleText className="text-sm">{button.title}</SidebarToggleText>
    </Link>
  );
};

const SidebarToggleText = ({
  className,
  ...props
}: React.ComponentProps<"h3">) => {
  const { open } = useSidebarContext();
  return <h3 className={cn(open ? "block" : "hidden", className)} {...props} />;
};

export {
  Sidebar,
  useSidebarContext,
  SidebarProvider,
  SidebarContentContainer,
  SidebarTopSection,
  SidebarMenu,
  SidebarMenuContainer,
  SidebarToggleText,
  SidebarBottomSection,
};
