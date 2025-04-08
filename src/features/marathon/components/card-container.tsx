"use client";

import { Card } from "@/components/cards/stats-card";
import { SingleResponseType } from "@/types/response";
import React, { useEffect } from "react";
import { MarathonStats } from "../server/marathons";
import { toast } from "sonner";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next-nprogress-bar";

export default function MarathonCardContainer({
  response,
}: {
  response: SingleResponseType<MarathonStats>;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (response.error) {
      toast.error(response.error.message);
    }
  }, [response]);

  return (
    <>
      <Card
        data-state={
          searchParams.get("active") === "1" && !searchParams.has("type")
        }
        title={"Total counts"}
        count={response?.data?.data.total ?? 0}
        onClick={() => {
          const params = {
            active: "1",
          };
          const searchParams = new URLSearchParams(params).toString();
          router.push(`${pathname}?${searchParams}`);
        }}
      />
      <Card
        data-state={
          searchParams.get("active") === "1" &&
          searchParams.get("type") === "virtual"
        }
        title={"Virtal Marathons"}
        count={response?.data?.data.virtual ?? 0}
        onClick={() => {
          const params = {
            active: "1",
            type: "virtual",
          };
          const searchParams = new URLSearchParams(params).toString();
          router.push(`${pathname}?${searchParams}`);
        }}
      />
      <Card
        data-state={
          searchParams.get("active") === "1" &&
          searchParams.get("type") === "onsite"
        }
        title={"On-site Marathons"}
        count={response?.data?.data.onsite ?? 0}
        onClick={() => {
          const params = {
            active: "1",
            type: "onsite",
          };
          const searchParams = new URLSearchParams(params).toString();
          router.push(`${pathname}?${searchParams}`);
        }}
      />
    </>
  );
}
