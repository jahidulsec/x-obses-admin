import { Header } from "@/features/login/components/header";
import { LoginForm } from "@/features/login/components/login-form";
import { cookies } from "next/headers";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-svh flex justify-center items-center flex-col gap-12">
      <Header />
      <LoginForm />
    </div>
  );
}
