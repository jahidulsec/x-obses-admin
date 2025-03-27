import { fetchWithAuth } from "@/lib/api";
import React from "react";

export default async function Home() {
  const handleAdmins = async () => {
    try {
      const response = await fetchWithAuth("/api/admin/v1/admin", {
        next: { tags: ["admins"] },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  };

  const data = await handleAdmins();

  return <div>{JSON.stringify(data)}</div>;
}
