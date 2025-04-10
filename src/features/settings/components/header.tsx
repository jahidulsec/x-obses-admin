import { PageHeading } from "@/components/heading/heading";
import { Bolt } from "lucide-react";
import React from "react";
import TabSection from "./tabs";

export default function HeaderSection() {
  return (
    <section>
      <PageHeading>
        <Bolt /> Settings
      </PageHeading>
      <TabSection />
    </section>
  );
}
