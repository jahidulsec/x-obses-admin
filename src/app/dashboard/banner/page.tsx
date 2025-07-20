import { TableContainer } from "@/components/table/table";
import BannerTable from "@/features/banner/components/banner-table";
import HeaderSection from "@/features/banner/components/header";
import { getBanners } from "@/features/banner/server/banner";
import { SearchParams } from "@/types/search-params";
import React, { Suspense } from "react";

export default async function BannerPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <TableContainer>
      <HeaderSection />
      <Suspense>
        <TableSection searchParams={searchParams} />
      </Suspense>
    </TableContainer>
  );
}

async function TableSection({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;

  const response = await getBanners(params);

  return <BannerTable response={response.data} />;
}
