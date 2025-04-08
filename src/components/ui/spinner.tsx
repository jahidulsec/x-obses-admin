import { cn } from "@/lib/utils";
import React from "react";

function Spinner({
  borderBottomColor,
  className,
}: {
  borderBottomColor?: string;
  className?: string;
}) {
  return (
    <div
      aria-label="Loading"
      className="relative inline-flex flex-col gap-2 items-center justify-center"
    >
      <div className={cn(`relative flex w-[1rem] aspect-square`, className)}>
        <i
          className={`absolute w-full h-full rounded-full animate-spin duration-700 ease-in-out border-2 border-t-transparent border-l-transparent border-r-transparent border-3 ${borderBottomColor}`}
        ></i>
        <i
          className={`absolute w-full h-full rounded-full opacity-100 duration-700 animate-spin ease-linear border-2 border-dotted border-t-transparent border-l-transparent border-r-transparent border-3 ${borderBottomColor}`}
        ></i>
      </div>
    </div>
  );
}

export { Spinner };
