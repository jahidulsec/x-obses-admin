import { TableSkeleton } from "@/components/skeleton/table";
import TableSection from "@/features/blog/components/table-section";
import { SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";

export default function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <>
      <Suspense fallback={<TableSkeleton />}>
        <TableSection searchParams={searchParams} />
      </Suspense>
    </>
  );
}
