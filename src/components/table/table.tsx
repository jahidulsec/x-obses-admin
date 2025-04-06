"use client";

import { cn } from "@/lib/utils";
import React from "react";

const TableContainer = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return <div className={cn("flex flex-col gap-5", className)} {...props} />;
};

const TableWrapper = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("border rounded-lg shadow-sm", className)} {...props} />
  );
};

const TableHeaderSection = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section
      className={cn(
        "flex justify-between items-center gap-5 flex-wrap",
        className
      )}
      {...props}
    />
  );
};

const TableHeaderSectionTitle = ({
  className,
  ...props
}: React.ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "text-xl font-bold text-accent-foreground/85 border-l-2 border-primary pl-2",
        className
      )}
      {...props}
    />
  );
};

export {
  TableWrapper,
  TableContainer,
  TableHeaderSection,
  TableHeaderSectionTitle,
};
