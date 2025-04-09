"use client";

import React from "react";
import { SingleResponseType } from "../server/leaderboard";
import MarathonTypeBadge from "@/features/marathon/components/badge";
import Image from "next/image";

export default function InfoSection({
  data,
}: {
  data: SingleResponseType["data"];
}) {
  return (
    <section className="flex flex-col gap-2">
      {/* title */}
      <div className="flex items-center gap-5">
        <h2 className="text-lg md:text-xl font-semibold">{data?.data.title}</h2>
        {data?.data.type && (
          <MarathonTypeBadge type={data?.data.type as string} />
        )}
      </div>
      {/* description */}
      <article className="text-sm text-muted-foreground">
        {data?.data.description}
      </article>

      {/* status */}
      <div className="my-2 flex items-center gap-2">
        {/* image container */}
        <div className="flex items-center ml-2">
          {data?.particiants.map((item) => (
            <div
              className="relative w-6 h-6 rounded-full overflow-hidden border -ml-2"
              key={item.id}
            >
              <Image
                fill
                objectFit="cover"
                src={item.imagePath ?? ""}
                alt={item.fullName}
              />
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold">{data?.totalParticiants} Participants</p>
      </div>
    </section>
  );
}
