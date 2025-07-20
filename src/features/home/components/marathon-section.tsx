import { Badge } from "@/components/badge/badge";
import { Section } from "@/components/section/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function MarathonSection() {
  return (
    <Section className="flex flex-col md:flex-row justify-between items-center gap-5 my-20">
      <div className="flex flex-col gap-6 max-w-sm self-start">
        <Badge className="w-fit">Challenge</Badge>
        <h2 className="text-3xl font-semibold">
          Marathon <br /> Challenges{" "}
          <span className="text-muted-foreground">for You</span>
        </h2>
        <p className="text-sm">
          Whether you&apos;re running from your city streets or crossing the
          real finish line, our marathon challenges are designed for everyone.
          Choose to run virtually from anywhere or join onsite events for the
          full race-day experience.
        </p>
        <Button variant={'secondary'} className="rounded-full w-fit min-w-[10rem]">Download App</Button>
      </div>

      <div className="relative w-[20rem] aspect-[9/16] border-4 border-foreground rounded-3xl overflow-hidden bg-background">
        <Image
          src={"/images/5k Challange Workout.svg"}
          alt=""
          fill
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      {/* quote */}
      <div className="flex flex-col gap-5 bg-muted w-[15rem] p-4 self-end">
        <div className="w-10 aspect-square bg-background flex justify-center items-center rounded-xl">
          🏆
        </div>

        <p>Transform dreams into reality</p>
      </div>
    </Section>
  );
}
