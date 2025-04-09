import { TableContainer } from "@/components/table/table";
import { SearchParams } from "@/types/search-params";
import React from "react";
import { getMarathonUsers } from "../server/leaderboard";
import LeaderboardTable from "./leaderboard-table";

export default async function TableSection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const response = await getMarathonUsers(params);

  return (
    <TableContainer>
      <LeaderboardTable response={response.data} />
    </TableContainer>
  );
}
