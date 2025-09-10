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
import { addBlog, updateBlog } from "../action/blog";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRouter } from "next-nprogress-bar";
import { MarkdownEditor } from "@/components/editor/markdown/editor";

const BlogForm = ({ blog }: { blog?: Blog }) => {
  const ref1 = React.useRef<MDXEditorMethods>(null);
  const [desc, setDesc] = React.useState(blog?.description ?? "");

  const ref2 = React.useRef<MDXEditorMethods>(null);
  const [details, setDetails] = React.useState(blog?.details ?? "");

  const [data, action] = useFormState(
    blog ? updateBlog.bind(null, blog.id) : addBlog,
    null
  );

  const router = useRouter();

  useEffect(() => {
    if (data?.toast) {
      toast.error(data.toast);
    } else if (data?.sucess) {
      toast.success(data?.sucess);
      router.push("/dashboard/blog");
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
        <Label>Read Time (min)</Label>
        <Input
          type="number"
          placeholder="Type your description here."
          name="readTime"
          defaultValue={blog?.readTime}
        />
        {data?.error && <ErrorMessage message={data.error.readTime} />}
      </p>

      <p className="flex flex-col gap-3">
        <Label>Description</Label>
        <MarkdownEditor
          ref={ref1}
          markdown={desc}
          onChange={(markdown, _) => setDesc(markdown)}
          placeholder="Write here..."
        />
        <textarea name="description" value={desc} className="hidden" />

        {data?.error && <ErrorMessage message={data.error.description} />}
      </p>
      <p className="flex flex-col gap-3">
        <Label>Details</Label>

        <MarkdownEditor
          ref={ref2}
          placeholder="Write here..."
          onChange={(markdown, _) => {
            setDetails(markdown);
            console.log(markdown);
          }}
          markdown={details}
        />
        <textarea name="details" value={details} className="hidden" />
        {data?.error && <ErrorMessage message={data.error.details} />}
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

      <FormSubmitButton className="max-w-[15rem]" />
    </Form>
  );
};

export { BlogForm };
