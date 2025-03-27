import { Logo } from "@/components/logo/logo";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center w-full gap-2">
      <Logo size={38} />

      {/* text */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <h2 className="text-sm">Login with your Admin account</h2>
      </div>
    </header>
  );
};

export { Header };
