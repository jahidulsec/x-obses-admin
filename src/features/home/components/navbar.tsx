import { Button } from "@/components/ui/button";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-muted">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl">
          X<strong>Obese</strong>
        </h1>

        <Button
          size={"lg"}
          className="shadow-none rounded-full bg-background text-foreground"
        >
          Download App
        </Button>
      </div>
    </header>
  );
}
