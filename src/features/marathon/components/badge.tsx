import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import React from "react";

const MarathonTypeBadge = ({ type }: { type: string }) => {
  return (
    <Badge
      variant={"outline"}
      className={"pl-0 py-0 text-accent-foreground/95"}
    >
      <Dot className={type === "virtual" ? "text-primary" : "text-blue-500"} />
      {type}
    </Badge>
  );
};

export default MarathonTypeBadge;
