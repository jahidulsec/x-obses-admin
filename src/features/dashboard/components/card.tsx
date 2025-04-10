"use client";

import { useRouter } from "next-nprogress-bar";
import React from "react";

export default function Card({
  icon,
  title,
  href = "",
}: {
  title: string;
  icon: any;
  href?: string;
}) {
  const router = useRouter();

  return (
    <article
      className="bg-muted/50 flex-1 md:flex-none p-4 min-w-[15rem] h-[8rem] flex flex-col gap-3 group hover:bg-primary cursor-pointer"
      onClick={() => router.push(href)}
    >
      {/* icon */}
      <div className="icon p-3 bg-primary/5 rounded-full overflow-hidden [&_svg]:size-6 text-primary w-fit group-hover:bg-primary-foreground">
        {icon}
      </div>

      <h2 className="text-xl font-semibold group-hover:text-primary-foreground">
        {title}
      </h2>
    </article>
  );
}
