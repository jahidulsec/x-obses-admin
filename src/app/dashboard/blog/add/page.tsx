import { PageHeading } from "@/components/heading/heading";
import { BlogForm } from "@/features/blog/components/form";
import { navList } from "@/lib/data";
import React from "react";

export default function CreateBlogpage() {
  const blog = navList.filter((item) => item.url.includes("blog"))?.[0];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6 my-6">
        <PageHeading>
          <blog.icon />
          Create Blog
        </PageHeading>

        <section className="border p-4 rounded-md">
          <BlogForm />
        </section>
      </div>
    </div>
  );
}
