import React from "react";
import HeaderSection from "./header";
import { TableContainer, TableWrapper } from "@/components/table/table";
import { DataTable } from "../../../components/table/data-table";
import { columns } from "./columns";
import { PagePagination } from "@/components/pagination/pagination";
import { getMarathons } from "../server/marathons";
import { SearchParams } from "@/types/search-params";

export default async function TableSection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q, p } = await searchParams;

  const page = Number(p) ?? 1;
  const limit = 20;

  const marathons = await getMarathons();

  return (
    <TableContainer>
      <HeaderSection />
      <TableWrapper>
        {/* table */}
        <DataTable
          columns={columns}
          data={marathons.data ? marathons.data?.data : []}
        />
      </TableWrapper>
      <PagePagination
        count={marathons.data ? marathons.data.pagination.total_items : page}
        limit={marathons.data ? marathons.data.pagination.per_page : limit}
      />
    </TableContainer>
  );
}
