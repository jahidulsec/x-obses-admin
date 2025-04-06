"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/lib/formatters";
import { ColumnDef } from "@tanstack/react-table";
import { Dot, Edit, ListStart, MoreVertical, Trash } from "lucide-react";

export type Marathon = {
  id: string;
  title: string;
  description: string;
  about: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  distanceKm: number;
  imagePath?: string;
  createdBy?: string;
  createdAt: Date;
  updatedAt: Date;
  type: "virtual" | "onsite";
};

export const columns: ColumnDef<Marathon>[] = [
  {
    header: "#",
    cell: ({ row, table }) => {
      const pageIndex = table.getState().pagination.pageIndex;
      const pageSize = table.getState().pagination.pageSize;
      return (
        <span># {row.index + 1 + pageIndex * pageSize + pageSize}</span>
      )
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <Badge
        variant={"outline"}
        className={"pl-0 py-0 text-accent-foreground/95"}
      >
        <Dot
          className={
            row.original.type === "virtual" ? "text-primary" : "text-blue-500"
          }
        />
        {row.original.type}
      </Badge>
    ),
  },
  {
    accessorKey: "distanceKm",
    header: "Distance (KM)",
  },
  {
    accessorKey: "startDate",
    header: "Start From",
    cell: ({ row }) => {
      const marathon = row.original;

      return <span>{formatDate(new Date(marathon.createdAt))}</span>;
    },
  },
  {
    accessorKey: "endDate",
    header: "End At",
    cell: ({ row }) => {
      const marathon = row.original;

      return <span>{formatDate(new Date(marathon.createdAt))}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created Date",
    cell: ({ row }) => {
      const marathon = row.original;

      return <span>{formatDate(new Date(marathon.createdAt))}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const marathon = row.original;

      return (
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(marathon.id)}
              >
                <Edit /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListStart /> Leaderboard
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
