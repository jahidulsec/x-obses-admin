"use client";

import { PasswordInput } from "@/components/inputs/password";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Label } from "@radix-ui/react-label";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "../actions/login";
import { ErrorMessage } from "@/components/text/error-message";
import { toast } from "sonner";

const LoginForm = () => {
  const [data, action] = useFormState(login, null);

  useEffect(() => {
    if (data?.toast) {
      toast.error(data.toast);
    } else if (data?.sucess) {
      toast.success(data?.sucess);
    }
  }, [data]);

  return (
    <main className="min-w-[20rem]">
      <form
        action={action}
        className="[&_label]:text-sm [&_label]:text-primary [&_label]:font-semibold [&_input]:mt-1.5 flex flex-col gap-3"
      >
        <div>
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" />
          {data?.error && <ErrorMessage message={data.error.username} />}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <PasswordInput />
          {data?.error && <ErrorMessage message={data.error.password} />}
        </div>

        <SubmitButton />
      </form>
    </main>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="font-semibold">
      {pending && (
        <Spinner
          borderBottomColor="border-b-background"
          className="mr-2 size-4"
        />
      )}
      {pending ? `Login...` : `Login`}
    </Button>
  );
};

export { LoginForm };
