import { MarkdownViewer } from "@/components/markdown/markdown-viewer";
import { params } from "@/types/search-params";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

export default async function PrivacyPage({ params }: { params: params }) {
  const { slug } = await params;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <MarkdownViewer url={`/data/privacy-${slug}.md`} />
    </div>
  );
}
