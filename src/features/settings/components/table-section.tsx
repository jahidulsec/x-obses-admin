import React from "react";
import { TableContainer } from "@/components/table/table";
import { SearchParams } from "@/types/search-params";
import HeaderSection from "./header";
import AdminTable from "./admin-table";
import { getAdmins } from "../server/admin";

export default async function TableSection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const response = await getAdmins(params);

  return (
    <TableContainer>
      <AdminTable response={response.data} />
    </TableContainer>
  );
}
