import React from "react";
import HeaderSection from "./header";
import { TableContainer, TableWrapper } from "@/components/table/table";
import { getMarathons } from "../server/marathons";
import { SearchParams } from "@/types/search-params";
import MarathonTable from "./marathon-table";

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
      <MarathonTable response={response} />
    </TableContainer>
  );
}
