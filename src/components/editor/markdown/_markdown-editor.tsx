"use client";

import { useIsDarkMode } from "@/hooks/useisDarkMode";
import { cn } from "@/lib/utils";
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  headingsPlugin,
  InsertTable,
  InsertThematicBreak,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  MDXEditorMethods,
  MDXEditorProps,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import { ForwardedRef } from "react";
import { markdownClassNames } from "./renderer";

export default function InternalMarkdownEditor({
  ref,
  className,
  ...props
}: {ref: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  //   const isDarkMode = useIsDarkMode()

  return (
    <MDXEditor
      {...props}
      ref={ref}
      contentEditableClassName={cn('', props.contentEditableClassName)}
      className={cn(
        markdownClassNames,
        "border rounded-md",
        // isDarkMode && "dark-theme", 
        className
      )}
      suppressHtmlProcessing
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        tablePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <InsertThematicBreak />
              <InsertTable />
              <CreateLink />
            </>
          ),
        }),
      ]}
    />
  );
}
