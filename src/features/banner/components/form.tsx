"use client";

import { Form, FormSubmitButton } from "@/components/forms/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { ErrorMessage } from "@/components/text/error-message";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { addBanner, updatebanner } from "../action/banner";

const BlogForm = ({ onClose, blog }: { onClose: () => void; blog?: Blog }) => {
  const [data, action] = useFormState(
    blog ? updatebanner.bind(null, blog.id) : addBanner,
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
    <Form action={action} className="flex flex-col gap-5 [&_p_input]:mt-1">
      <p>
        <Label>Title</Label>
        <Input
          name="title"
          placeholder="Type blog title."
          defaultValue={blog?.title}
        />
        {data?.error && <ErrorMessage message={data.error.title} />}
      </p>

      <p>
        <Label>Image</Label>
        <Input type="file" name="imagePath" />

        {/* default image */}
        {blog?.imagePath && (
          <div className="relative max-w-[14rem] w-full h-20 mt-2 rounded-lg overflow-hidden border">
            <Image
              fill
              objectFit="cover"
              src={blog?.imagePath ?? ""}
              alt={blog?.title ?? ""}
            />
          </div>
        )}

        {data?.error && <ErrorMessage message={data?.error.imagePath} />}
      </p>

      <FormSubmitButton />
    </Form>
  );
};

export { BlogForm };
