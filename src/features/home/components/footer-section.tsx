import { Section } from "@/components/section/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-foreground m-1 rounded-3xl text-background mb-5">
      <Section className="min-h-[5rem] py-4 flex flex-col gap-6 pt-20">
        <h2 className="text-2xl">X-Obese</h2>

        <Separator className="bg-muted/20" />

        <div className="flex justify-between gap-5 flex-wrap">
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              Empowering Every <br /> Step of Fitness!
            </p>
            <p className="text-muted-foreground text-sm">
              Start today, stay fit forever.
            </p>
            <Button
              variant={"secondary"}
              size={"lg"}
              className="w-fit min-w-[10rem] rounded-full mt-6"
            >
              Download App
            </Button>
          </div>

          <div className="min-w-[20rem]">
            <h3 className="mb-6">Sitemap</h3>
            <ul className="text-muted-foreground text-sm flex flex-col gap-1">
              <li>
                <Button variant={"link"} className="px-0 text-muted-foreground" asChild>
                  <Link href={"/contact"}>Contact us</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="px-0 text-muted-foreground" asChild>
                  <Link href={"/privacy-policy"}>Privary Policy</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-muted/20" />
        <p className="text-xs text-muted-foreground">All right reversed.</p>
      </Section>
    </footer>
  );
}
