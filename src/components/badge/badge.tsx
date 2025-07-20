import { cn } from "@/lib/utils";
import React from "react";

const Badge = ({ className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn("p-2 px-6 text-sm bg-muted rounded-full", className)}
      {...props}
    />
  );
};

export { Badge };
