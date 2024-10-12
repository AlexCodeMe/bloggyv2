"use client";

import { type Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { Heading2, Bold, Italic } from "lucide-react";

export default function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  return (
    <div className="border border-input bg-transparent rounded-lg p-2 flex gap-2">
      {/* Heading 2 */}
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="size-4" />
      </Toggle>

      {/* Bold */}
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="size-4" />
      </Toggle>

      {/* Italic */}
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="size-4" />
      </Toggle>
    </div>
  );
}
