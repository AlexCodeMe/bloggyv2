"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

export default function Tiptap({
  content,
  onChange,
}: {
  content: string;
  onChange: (value: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit,
      Heading.configure({
        HTMLAttributes: { class: "text-2xl font-bold", levels: [2] },
      }),
    ],
    content: content || "<p>Start writing your post...</p>",
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[400px] border-input prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
