import { MarkdownViewer } from "@/components/markdown/markdown-viewer";
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <MarkdownViewer url="/data/support.md" />
    </div>
  );
}
