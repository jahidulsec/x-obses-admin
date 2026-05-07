"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";
import { CircleOff, Loader2 } from "lucide-react";

const MarkdownViewer = ({ url }: { url: string }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) return ``;
        return res.text();
      })
      .then(setContent)
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <div className={`flex flex-col gap-4 md-container min-h-[15rem]`}>
      {loading ? (
        <div className="flex justify-center items-center min-h-[calc(100svh-400px)]">
          <Loader2 className="size-10 animate-spin" />
        </div>
      ) : content === "" ? (
        <div className="flex flex-col justify-center items-center gap-8 min-h-[calc(100svh-400px)]">
          <div className="bg-muted p-4 rounded-md">
            <CircleOff className="size-20 text-muted-foreground" />
          </div>
          <p>No Data Found!</p>
        </div>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
};

export { MarkdownViewer };
