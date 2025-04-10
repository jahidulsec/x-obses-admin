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
import { addAdmin, updateAdmin } from "../../action/admin";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminForm = ({
  admin,
  onClose,
}: {
  admin?: Admin;
  onClose: () => void;
}) => {
  const [data, action] = useFormState(
    admin ? updateAdmin.bind(null, admin?.id) : addAdmin,
    null
  );

  useEffect(() => {
    if (data?.toast) {
      toast.error(data.toast);
    } else if (data?.sucess) {
      toast.success(data?.sucess);
      onClose();
    }
  }, [data]);

  return (
    <Form action={action} className="flex flex-col gap-5 [&_div_input]:mt-1">
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

      <div>
        <Label>Role</Label>
        <Select name="role" defaultValue={admin?.role}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Role</SelectLabel>
              <SelectItem value="superadmin">Superadmin</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {data?.error?.role && <ErrorMessage message={"Select a role"} />}
      </div>

      <FormSubmitButton />
    </Form>
  );
};

export { AdminForm };
