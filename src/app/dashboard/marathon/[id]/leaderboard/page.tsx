import { TableSkeleton } from "@/components/skeleton/table";
import CardSection from "@/features/leaderboard/components/card-section";
import Header from "@/features/leaderboard/components/header";
import { params } from "@/types/search-params";
import React, { Suspense } from "react";

export default async function LeaderboardPage({ params }: { params: params }) {
  const { id } = await params;

  return (
    <>
      <Suspense>
        <Header id={id as string} />
      </Suspense>
      <Suspense>
        <CardSection />
      </Suspense>
      {/* <Suspense fallback={<TableSkeleton />}>
        <TableSection searchParams={searchParams} />
      </Suspense> */}
    </>
  );
}
