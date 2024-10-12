"use client";

import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useMemo } from "react";
import { saveToStorage, uploadFiles } from "@/lib/uploadthing";

interface BlockNoteProps {
  content: string;
  onChange: (content: string) => void;
  editable?: boolean;
}

export default function BlockNote({
  onChange,
  editable = true,
}: BlockNoteProps) {
  const editor = useMemo(() => {
    return BlockNoteEditor.create({
      uploadFile: async (file: File) => {
        const [res] = await uploadFiles("imageUploader", { files: [file] });
        return res.url;
      },
    });
  }, []);

  if (!editor) {
    return <div>Loading content...</div>;
  }

  // Render the editor instance
  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={() => {
        saveToStorage(editor.document);
        onChange(JSON.stringify(editor.document));
      }}
      theme="light"
    />
  );
}
