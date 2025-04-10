import { ProfileForm } from "@/features/settings/components/form/profile-form";
import { getProfile } from "@/features/settings/server/profile";
import React from "react";

export default async function SettingsPage() {
  const response = await getProfile();

  return (
    <>
      <ProfileForm admin={response.data?.data} />
    </>
  );
}
