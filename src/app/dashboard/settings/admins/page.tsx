import { TableSkeleton } from "@/components/skeleton/table";
import TableSection from "@/features/settings/components/table-section";
import { SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";

export default function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Suspense fallback={<TableSkeleton />}>
      <TableSection searchParams={searchParams} />
    </Suspense>
  );
}
