import CardSection from "@/features/dashboard/components/card-section";
import HeaderSection from "@/features/dashboard/components/header";
import { getProfile } from "@/features/settings/server/profile";
import React from "react";

export default async function DashboardPage() {
  const response = await getProfile();

  return (
    <>
      <HeaderSection data={response.data} />
      <CardSection />
    </>
  );
}
