import {
  TableHeaderSection,
  TableHeaderSectionTitle,
} from "@/components/table/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export default function HeaderSection() {
  return (
    <TableHeaderSection>
      <TableHeaderSectionTitle>Marathons</TableHeaderSectionTitle>
      <Button variant={'outline'} size={'sm'} className="hover:border-primary hover:bg-transparent">
        <Plus className="text-primary" />
        <span className="hidden sm:block">Add marathon</span>
      </Button>
    </TableHeaderSection>
  );
}
