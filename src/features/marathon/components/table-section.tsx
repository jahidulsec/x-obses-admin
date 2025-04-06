import React from "react";
import HeaderSection from "./header";
import { TableContainer, TableWrapper } from "@/components/table/table";
import { DataTable } from "../../../components/table/data-table";
import { columns, Payment } from "./columns";
import { payments } from "@/lib/data";
import { PagePagination } from "@/components/pagination/pagination";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return payments;
}

export default async function TableSection() {
  const data = await getData();

  return (
    <TableContainer>
      <HeaderSection />
      <TableWrapper>
        {/* table */}
        <DataTable columns={columns} data={data} />
      </TableWrapper>
      <PagePagination count={10} limit={5} />
    </TableContainer>
  );
}
