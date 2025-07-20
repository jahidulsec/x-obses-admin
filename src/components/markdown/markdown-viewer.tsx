"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownViewer = ({ url }: { url: string }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent);
  }, [url]);

  return (
    <div className="flex flex-col gap-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export { MarkdownViewer };
