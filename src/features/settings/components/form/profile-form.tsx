"use client";

import { Form, FormSubmitButton } from "@/components/forms/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { ErrorMessage } from "@/components/text/error-message";
import { Admin } from "@/types/admin";
import { PasswordInput } from "@/components/inputs/password";
import { updateProfile } from "../../action/profile";

const ProfileForm = ({ admin }: { admin?: Admin }) => {
  const [data, action] = useFormState(
    updateProfile.bind(null, admin?.id ?? ""),
    null
  );

  useEffect(() => {
    if (data?.toast) {
      toast.error(data.toast);
    } else if (data?.sucess) {
      toast.success(data?.sucess);
    }
  }, [data]);

  return (
    <Form
      action={action}
      className="flex flex-col gap-5 md:[&_div]:grid md:[&_div]:grid-cols-[180px_1fr] md:[&_div]:items-center [&_div_input]:mt-1"
    >
      <div>
        <Label>Username</Label>
        <Input
          name="username"
          placeholder="Type admin username."
          defaultValue={admin?.username}
          autoComplete="false"
        />
        {data?.error && <ErrorMessage message={data.error.username} />}
      </div>
      <div>
        <Label>Full name</Label>
        <Input
          name="name"
          placeholder="Type admin full name."
          defaultValue={admin?.name}
        />
        {data?.error && <ErrorMessage message={data.error.name} />}
      </div>
      <div>
        <Label>Password</Label>
        <PasswordInput placeholder="Type new password" autoComplete="false" />
        {data?.error && <ErrorMessage message={data.error.password} />}
      </div>

      <FormSubmitButton className="md:ml-auto md:w-1/6" />
    </Form>
  );
};

export { ProfileForm };
