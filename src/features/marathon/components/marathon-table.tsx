"use client";

import { PagePagination } from "@/components/pagination/pagination";
import { DataTable } from "@/components/table/data-table";
import { TableWrapper } from "@/components/table/table";
import { MutiResponseType } from "@/types/response";
import React, { useTransition } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Dot, Edit, ListStart, MoreVertical, Trash } from "lucide-react";
import { formatDate } from "@/lib/formatters";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "@/components/ui/sheet";
import { MarathonForm } from "./form";
import { DEFAULT_PAGE_SIZE } from "@/lib/data";
import { Marathon } from "@/types/marathon";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { deleteMarathon } from "../server/marathons";
import { toast } from "sonner";

export default function MarathonTable({
  response,
}: {
  response: MutiResponseType<Marathon>["data"];
}) {
  const [edit, setEdit] = React.useState<any>(false);
  const [delMarathon, setDelMarathon] = React.useState<any>(false);
  const [isPending, startTransition] = useTransition();

  const columns: ColumnDef<Marathon>[] = [
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

        return <span>{formatDate(new Date(marathon.startDate))}</span>;
      },
    },
    {
      accessorKey: "endDate",
      header: "End At",
      cell: ({ row }) => {
        const marathon = row.original;

        return <span>{formatDate(new Date(marathon.endDate))}</span>;
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
          <>
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
                  <DropdownMenuItem onClick={() => setEdit(marathon)}>
                    <Edit /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ListStart /> Leaderboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive"
                    onClick={() => setDelMarathon(marathon.id)}
                  >
                    <Trash /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        );
      },
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

      {/* edit sheet */}
      <Sheet open={!!edit} onOpenChange={setEdit}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit marathon</SheetTitle>
          </SheetHeader>

          {/* form */}
          <div className="mt-5">
            <MarathonForm marathon={edit} onClose={() => setEdit(false)} />
          </div>
        </SheetContent>
      </Sheet>

      {/* delete table modal */}
      <AlertDialog open={!!delMarathon} onOpenChange={setDelMarathon}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-bold">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              <b> route</b> and remove data from servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={isPending}
              onClick={() => {
                startTransition(async () => {
                  const response = deleteMarathon(delMarathon);
                  toast.promise(response, {
                    loading: "Loading...",
                    success: (data) => {
                      if (!data.data) throw data.error;
                      return data.data?.message;
                    },
                    error: (data) => {
                      return data.error;
                    },
                  });
                });
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
