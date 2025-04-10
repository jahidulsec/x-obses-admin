import { cn } from "@/lib/utils";
import React from "react";

const PageHeading = ({ className, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "flex items-center gap-2 [&_svg]:size-4 [&_svg]:text-primary font-semibold",
        className
      )}
      {...props}
    />
  );
};

export { PageHeading };
