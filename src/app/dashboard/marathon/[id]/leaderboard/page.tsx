import { TableSkeleton } from "@/components/skeleton/table";
import CardSection from "@/features/leaderboard/components/card-section";
import Header from "@/features/leaderboard/components/header";
import TableSection from "@/features/leaderboard/components/table-section";
import { params, SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";

export default async function LeaderboardPage({
  params,
  searchParams,
}: {
  searchParams: SearchParams;
  params: params;
}) {
  const { id } = await params;

  return (
    <>
      <Suspense>
        <Header id={id as string} />
      </Suspense>
      <Suspense>
        <CardSection id={id as string} />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <TableSection id={id as string} searchParams={searchParams} />
      </Suspense>
    </>
  );
}
