import { PageHeading } from "@/components/heading/heading";
import { Bolt } from "lucide-react";
import React from "react";
import TabSection from "./tabs";
import { getProfile } from "../server/profile";

export default async function HeaderSection() {
  const response = await getProfile();

  return (
    <section>
      <PageHeading>
        <Bolt /> Settings
      </PageHeading>
      <TabSection admin={response.data} />
    </section>
  );
}
