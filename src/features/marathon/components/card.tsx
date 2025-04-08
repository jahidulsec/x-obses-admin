import React from "react";
import { CardContainer } from "@/components/cards/stats-card";
import { getMarathonStats } from "../server/marathons";
import MarathonCardContainer from "./card-container";

const CardSection = async () => {
  const response = await getMarathonStats();

  return (
    <CardContainer>
      <MarathonCardContainer response={response} />
    </CardContainer>
  );
};

export default CardSection;
