import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-muted">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-xl">
            X<strong>Obese</strong>
          </h1>
        </Link>

        <Button
          size={"lg"}
          className="shadow-none rounded-full bg-background text-foreground hover:bg-background border border-transparent hover:border-primary transition-colors duration-300"
        >
          Download App
        </Button>
      </div>
    </header>
  );
}
