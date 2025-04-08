import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TableSkeleton = () => {
  return (
    <div className="my-5 border rounded-lg overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[5rem]">
              <div className="min-w-24 h-3 bg-gray-200 animate-pulse"></div>
            </TableHead>
            <TableHead>
              <div className="min-w-24 h-3 bg-gray-200 animate-pulse"></div>
            </TableHead>
            <TableHead>
              <div className="min-w-24 h-3 bg-gray-200 animate-pulse"></div>
            </TableHead>
            <TableHead>
              <div className="min-w-24 h-3 bg-gray-200 animate-pulse"></div>
            </TableHead>
            <TableHead className="w-[10rem]">
              <div className="min-w-24 h-3 bg-gray-200 animate-pulse"></div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="min-w-24 h-3 bg-gray-100 animate-pulse"></div>
              </TableCell>
              <TableCell>
                <div className="min-w-24 h-3 bg-gray-100 animate-pulse"></div>
              </TableCell>
              <TableCell>
                <div className="min-w-24 h-3 bg-gray-100 animate-pulse"></div>
              </TableCell>
              <TableCell>
                <div className="min-w-24 h-3 bg-gray-100 animate-pulse"></div>
              </TableCell>
              <TableCell>
                <div className="min-w-24 h-3 bg-gray-100 animate-pulse"></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { TableSkeleton };
