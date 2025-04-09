import React from "react";
import { getMarathon } from "../server/leaderboard";
import InfoSection from "./info-section";

export default async function Header({ id }: { id: string }) {
  const response = await getMarathon(id);

  return <InfoSection data={response.data} />;
}
