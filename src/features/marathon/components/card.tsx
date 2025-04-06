import React from "react";
import { CardContainer, Card } from "@/components/cards/stats-card";
import { marathonCards } from "@/lib/data";

const CardSection = async() => {
  return (
    <CardContainer>
      {marathonCards.map((item) => (
        <Card key={item.id} title={item.title} count={item.count} />
      ))}
    </CardContainer>
  );
};

export default CardSection;
