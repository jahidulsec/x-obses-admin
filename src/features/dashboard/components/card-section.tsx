import React from "react";
import Card from "./card";
import { navList } from "@/lib/data";

export default function CardSection() {
  return (
    <section className="flex items-center gap-0.5 flex-wrap">
      {navList.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          icon={<item.icon />}
          href={item.url}
        />
      ))}
    </section>
  );
}
