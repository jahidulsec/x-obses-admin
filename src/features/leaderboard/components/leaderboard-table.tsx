"use client";

import { PagePagination } from "@/components/pagination/pagination";
import { DataTable } from "@/components/table/data-table";
import { TableWrapper } from "@/components/table/table";
import { MutiResponseType } from "@/types/response";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DEFAULT_PAGE_SIZE } from "@/lib/data";
import { MarathonUser } from "@/types/leaderboard";
import { UserImage } from "./image";
import { formatDateTime, timeConversion } from "@/lib/formatters";

export default function LeaderboardTable({
  response,
}: {
  response: MutiResponseType<MarathonUser>["data"];
}) {
  const columns: ColumnDef<MarathonUser>[] = [
    {
      header: "#",
      cell: ({ row, table }) => {
        const pageIndex = table.getState().pagination.pageIndex;
        const pageSize = table.getState().pagination.pageSize;
        return (
          <span className="text-nowrap">
            # {row.index + 1 + pageIndex * pageSize}
          </span>
        );
      },
      size: 20, // exact size in pixels
      minSize: 15, // minimum size in pixels
      maxSize: 30, // maximum size in pixels
    },
    {
      header: "User",
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex items-center gap-3">
            <UserImage imagePath={user.user.imagePath} />
            <h3 className="font-medium">{user.user.fullName}</h3>
          </div>
        );
      },
      size: 400, // exact size in pixels
      minSize: 150, // minimum size in pixels
      maxSize: 600, // maximum size in pixels
    },
    {
      accessorKey: "distanceKm",
      header: "Distance (KM)",
    },
    {
      header: "Duration",
      cell: ({ row }) => {
        const user = row.original;
        return <span>{timeConversion(user.durationMs)}</span>;
      },
    },
    {
      header: "Last attempt",
      cell: ({ row }) => {
        const user = row.original;
        return <span>{formatDateTime(new Date(user.updatedAt))}</span>;
      },
      size: 40, // exact size in pixels
      minSize: 150, // minimum size in pixels
      maxSize: 600, // maximum size in pixels
    },
  ];

  return (
    <>
      <TableWrapper>
        {/* table */}
        <DataTable columns={columns} data={response?.data || []} />
      </TableWrapper>

      <PagePagination
        count={response?.data != null ? response.pagination.total_items : 0}
        limit={
          response?.data != null
            ? response.pagination.per_page
            : DEFAULT_PAGE_SIZE
        }
      />
    </>
  );
}
