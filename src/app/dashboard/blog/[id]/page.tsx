import { PageHeading } from "@/components/heading/heading";
import { BlogForm } from "@/features/blog/components/form";
import { getBlog, getBlogs } from "@/features/blog/server/blog";
import { navList } from "@/lib/data";
import { params } from "@/types/search-params";
import React from "react";

export default async function DetailsBlogpage({ params }: { params: params }) {
  const { id } = await params;

  const blog = navList.filter((item) => item.url.includes("blog"))?.[0];
  const res = await getBlog(id as string);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6 my-6">
        <PageHeading>
          <blog.icon />
          Edit Blog
        </PageHeading>

        <section className="border p-4 rounded-md">
          <BlogForm blog={res.data?.data} />
        </section>
      </div>
    </div>
  );
}
