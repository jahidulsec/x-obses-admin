"use client";

import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const MultiInput = ({
  className,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<"input"> & {
  onValueChange: (value: string[]) => void;
}) => {
  const [inputValues, setInputValues] = React.useState<string[]>(
    defaultValue ? defaultValue.toString().split(";") : []
  );

  return (
    <div className="flex flex-col gap-2">
      {/* show list */}
      <div className="flex items-center gap-1 flex-wrap">
        {inputValues.map((item) => (
          <div
            className="border bg-muted w-fit px-4 rounded-lg text-sm text-muted-foreground"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      {/* input section */}
      <Input
        {...props}
        className={cn("", className)}
        onChange={(e) => {
          setInputValues(e.target.value.split(","));
          onValueChange(e.target.value.split(","));
        }}
      />
    </div>
  );
};

export { MultiInput };
