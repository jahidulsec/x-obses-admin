import { TableSkeleton } from "@/components/skeleton/table";
import CardSection from "@/features/marathon/components/card";
import TableSection from "@/features/marathon/components/table-section";
import { SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";

export default async function MarathonPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <>
      <Suspense>
        <CardSection />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <TableSection searchParams={searchParams} />
      </Suspense>
    </>
  );
}
