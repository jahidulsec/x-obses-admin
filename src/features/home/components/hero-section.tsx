import { Badge } from "@/components/badge/badge";
import { Section } from "@/components/section/section";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-muted to-background">
      <Section className="bg-background min-h-[10rem] rounded-t-[5rem] p-10 flex flex-col justify-center items-center gap-10">
        <Badge>Fitness App</Badge>

        <h2 className="text-3xl lg:text-5xl text-center font-semibold text-muted-foreground">
          The Fitness{" "}
          <span className="text-foreground">
            Jouney <br /> Starts Here
          </span>
        </h2>

        <div className="relative isolate mx-auto w-full flex justify-center items-center">
          <div className="relative mt-10">
            {/* mobile screen */}
            <div className="relative w-[350px] h-[490px] bg-muted rounded-t-3xl border-4 overflow-hidden border-b-0 border-foreground">
              <Image
                src={"/images/Home 2.jpg"}
                alt=""
                fill
                objectFit="cover"
                objectPosition="top"
              />
            </div>

            <div className="w-16 aspect-square rounded-full border justify-center items-center absolute top-20 bg-background -left-10 md:flex hidden">
              💪
            </div>
            <Image
              src={"/images/workout.png"}
              alt=""
              width={220}
              height={220}
              className="border rounded-2xl absolute top-10 -right-[7rem] bg-background md:block hidden"
            />
          </div>

          {/* plan image */}
          <Image
            src={"/images/plan.png"}
            alt=""
            width={250}
            height={220}
            className="border rounded-2xl absolute top-[20%] xl:top-20 px-4 right-0 2xl:right-20 bg-background xl:block hidden"
          />
          <Image
            src={"/images/score.svg"}
            alt=""
            width={150}
            height={80}
            className="border rounded-2xl absolute top-50 px-4 left-[10%] bg-muted/50 md:block hidden"
          />

          <Image
            src={"/images/marathon.svg"}
            alt=""
            width={250}
            height={250}
            className="border rounded-2xl absolute bottom-20 px-4 left-[15%] xl:left-[24%] -z-[1] bg-background p-4 md:block hidden"
          />

          <Image
            src={"/images/goal.svg"}
            alt=""
            width={250}
            height={250}
            className="border rounded-2xl absolute bottom-20 px-4 right-[10%] xl:right-[20%] bg-background p-4 md:block hidden"
          />
        </div>
      </Section>
    </div>
  );
}
