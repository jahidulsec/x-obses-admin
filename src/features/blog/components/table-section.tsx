import React from "react";
import { TableContainer } from "@/components/table/table";
import { SearchParams } from "@/types/search-params";
import HeaderSection from "./header";
import { getBlogs } from "../server/blog";
import BlogTable from "./blog-table";

export default async function TableSection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const response = await getBlogs(params);

  return (
    <TableContainer>
      <HeaderSection />
      <BlogTable response={response.data} />
    </TableContainer>
  );
}
