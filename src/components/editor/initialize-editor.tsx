"use client";
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  ListsToggle,
  Separator,
  CreateLink,
  linkPlugin,
  tablePlugin,
  InsertTable,
  InsertThematicBreak,
  linkDialogPlugin,
} from "@mdxeditor/editor";
import { cn } from "@/lib/utils";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      contentEditableClassName={cn(props.contentEditableClassName)}
      className={cn("markdown border rounded-md p-3", props.className)}
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        tablePlugin(),
        linkPlugin(),
        linkDialogPlugin({
          onClickLinkCallback(url) {
            console.log(`clicked ${url} in the edit link dialog`);
          },
          onReadOnlyClickLinkCallback(e, _node, url) {
            e.preventDefault();
            console.log(`clicked ${url} in the read-only editor mode`);
          },
        }),
        toolbarPlugin({
          toolbarClassName: "my-classname",
          toolbarContents: () => (
            <>
              <BoldItalicUnderlineToggles />
              <Separator />
              <ListsToggle />
              <Separator />
              <InsertThematicBreak />
              <InsertTable />
              <CreateLink />
            </>
          ),
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
