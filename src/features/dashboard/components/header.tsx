import { PageHeading } from "@/components/heading/heading";
import { Admin } from "@/types/admin";
import { SingleResponseType } from "@/types/response";
import React from "react";

export default function HeaderSection({
  data,
}: {
  data: SingleResponseType<Admin>["data"];
}) {
  return <section>
    <PageHeading>Welcome, <strong>{data?.data.name}</strong></PageHeading>
  </section>;
}
