import { cn } from "@/lib/utils";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

const Form = ({ className, ...props }: React.ComponentProps<"form">) => {
  return (
    <form className={cn("flex flex-col gap-5 [&_p_input]:mt-1 [&_p_button]:mt-1 [&_p_textarea]:mt-1", className)} {...props} />
  );
};

const FormSubmitButton = () => {
    const { pending } = useFormStatus();
  
    return (
      <Button type="submit" disabled={pending} className="font-semibold">
        {pending && (
          <Spinner
            borderBottomColor="border-b-background"
            className="mr-2 size-4"
          />
        )}
        {pending ? `Saving...` : `Save`}
      </Button>
    );
  };

export { Form, FormSubmitButton };
