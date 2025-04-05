"use client";

import React, { createContext, useContext, useState } from "react";
import { Button } from "../ui/button";
import { Layers, PanelLeft } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { Logo } from "../logo/logo";

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
  const [open, setOpen] = useState(false);

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
          !open ? "items-center" : "px-3"
        }`,
        className
      )}
    >
      {children}
    </aside>
  );
};

const SidebarContainer = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        `w-full bg-white sm:rounded-lg sm:m-1 shadow-md`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const SidebarTopSection = () => {
  const { open } = useSidebarContext();

  return (
    <div className="top">
      {/* logo section */}
      <div className="logo flex gap-2 items-center">
        <Logo />
        <h1
          className={`text-nowrap font-semibold ${open ? "block" : "hidden"}`}
        >
          X-Obese
        </h1>
      </div>

      {/* menu container */}
      <SidebarMenuContainer>
        <SidebarMenu button={{ title: "What", icon: Layers }} />
      </SidebarMenuContainer>
    </div>
  );
};

const SidebarMenuContainer = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section className={cn("flex flex-col gap-5 my-5", className)} {...props} />
  );
};

type ButtonPrpos = {
  icon: React.ElementType;
  title: string;
};

const SidebarMenu = ({
  className,
  button,
  ...props
}: React.ComponentProps<"button"> & { button: ButtonPrpos }) => {
  return (
    <button
      className={cn("flex gap-2 hover:bg-muted hover:px-4 py-2 transition-all duration-300", className)}
      {...props}
    >
      <button.icon className="text-primary" />
      {button.title}
    </button>
  );
};

const SidebarToggleText = ({className, ...props}: React.ComponentProps<'h3'>) => {
    return (
        <h3 className={cn("", className)} {...props}/>
    )
}

export {
  Sidebar,
  useSidebarContext,
  SidebarProvider,
  SidebarContainer,
  SidebarTopSection,
};
