import React from "react";
import HeaderSection from "./header";
import { TableContainer, TableWrapper } from "@/components/table/table";
import { DataTable } from "../../../components/table/data-table";
import { PagePagination } from "@/components/pagination/pagination";
import { getMarathons } from "../server/marathons";
import { SearchParams } from "@/types/search-params";
import { DEFAULT_PAGE_SIZE } from "@/lib/data";
import MarathonTable from "./marathon-table";
import { Marathon } from "@/types/marathon";

export default async function TableSection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const response = await getMarathons(params);

  return (
    <TableContainer>
      <HeaderSection />
      <MarathonTable response={response.data} />
    </TableContainer>
  );
}
