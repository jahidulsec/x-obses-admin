import { CardContainer } from "@/components/cards/stats-card";
import React from "react";
import { MutiResponseType } from "@/types/response";
import { MarathonUser } from "@/types/leaderboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { timeConversion } from "@/lib/formatters";

export default function LeaderboardCardContainer({
  data,
}: {
  data: MutiResponseType<MarathonUser>["data"];
}) {
  return (
    <CardContainer>
      {data &&
        data.data.map((item, index) => (
          <article
            key={item.id}
            className="flex-1 border p-2 rounded-lg shadow-sm hover:border-primary flex justify-between items-center"
          >
            {/* top section */}
            <div className="flex gap-2 flex-col">
              {/* image and namge */}
              <div className="flex items-center gap-2">
                {/* image */}
                <div className="relative w-8 h-8 rounded-full border border-primary overflow-hidden">
                  <Image
                    fill
                    objectFit="cover"
                    src={
                      item?.user.imagePath !== null
                        ? item?.user.imagePath
                        : "/images/user.png"
                    }
                    alt={item.userId}
                  />
                </div>
                {/* name */}
                <h4 className="text-muted-foreground font-semibold">
                  {item.user.fullName}
                </h4>
              </div>

              {/* stats */}
              <div className="flex items-center gap-5">
                <Field name="Distance" value={item.distanceKm.toString()} />
                <Field
                  name="Duration"
                  value={timeConversion(item.durationMs).toString()}
                />
              </div>
            </div>

            {/* rank */}
            <div
              className={`text-xl font-bold rounded-full w-16 h-16 flex justify-center items-center ${
                index === 0
                  ? "bg-amber-400"
                  : index === 1
                  ? "bg-stone-300"
                  : "bg-orange-700 text-background"
              }`}
            >
              <p>{index + 1}</p>
            </div>
          </article>
        ))}
    </CardContainer>
  );
}

const Field = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex flex-col gap-">
      <h4 className="text-xs text-muted-foreground font-semibold">{name}</h4>
      <h5 className="font-medium text-md">{value}</h5>
    </div>
  );
};
