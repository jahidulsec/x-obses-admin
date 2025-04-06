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
      <CardSection />
      <Suspense>
        <TableSection searchParams={searchParams} />
      </Suspense>
    </>
  );
}
