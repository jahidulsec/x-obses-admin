
import React from "react";
import LeaderboardCardContainer from "./card-container";
import { getMarathonUsers } from "../server/leaderboard";

export default async function CardSection() {

  const response = await getMarathonUsers({size: 3, page: 1})

  return (
    <section>
      <h3 className="text-lg text-primary font-semibold mb-2">Leaderboard</h3>
      <LeaderboardCardContainer data={response.data}  />
    </section>
  );
}
