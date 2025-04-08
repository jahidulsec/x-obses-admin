import React from "react";
import HeaderSection from "./header";
import { TableContainer, TableWrapper } from "@/components/table/table";
import { DataTable } from "../../../components/table/data-table";
import { columns } from "./columns";
import { PagePagination } from "@/components/pagination/pagination";
import { getMarathons } from "../server/marathons";
import { SearchParams } from "@/types/search-params";
import { DEFAULT_PAGE_SIZE } from "@/lib/data";

export default async function TableSection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const limit = DEFAULT_PAGE_SIZE;

  const marathons = await getMarathons(params);

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
        count={marathons.data ? marathons.data.pagination.total_items : 0}
        limit={marathons.data ? marathons.data.pagination.per_page : limit}
      />
    </TableContainer>
  );
}
