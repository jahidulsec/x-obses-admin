"use";

import { Badge } from "@/components/ui/badge";
import { marathonCards } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import React from "react";

const CardSection = () => {
  return (
    <CardContainer>
      {marathonCards.map((item) => (
        <Card key={item.id} title={item.title} count={item.count} />
      ))}
    </CardContainer>
  );
};

const CardContainer = ({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section
      className={cn("flex items-center gap-3 flex-wrap", className)}
      {...props}
    >
      {children}
    </section>
  );
};

const Card = ({
  className,
  children,
  title,
  count,
  ...props
}: React.ComponentProps<"article"> & { count: number }) => {
  return (
    <article
      className={cn(
        "flex-1 basis-[30%] bg-card border h-30 rounded-lg px-5 py-3 flex flex-col gap-3 hover:border-primary transition-colors duration-300 cursor-pointer",
        className
      )}
      {...props}
    >
      {/* top */}
      <div className="flex items-center justify-between gap-5 ">
        <h2 className="text-muted-foreground text-xs font-semibold">{title}</h2>
        {/* status */}
        <Badge
          variant={"outline"}
          className="flex items-center gap-1 pl-0 text-accent-foreground/85"
        >
          <Dot className="text-primary size-5" /> active
        </Badge>
      </div>

      <h3 className="text-3xl font-semibold">{count}</h3>
    </article>
  );
};

export { CardSection };
