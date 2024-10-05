"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function DraftEditor({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { draftId: string };
}) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const saveDraft = () => {
    // Here you would typically make an API call to save the draft
    console.log("Saving draft:", { title, content });
    setLastSaved(new Date());
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={handleTitleChange}
          className="text-3xl font-bold mb-4"
        />
        <Textarea
          placeholder="Start writing your blog post..."
          value={content}
          onChange={handleContentChange}
          className="min-h-[400px]"
        />
      </div>
      <div className="flex justify-between items-center">
        <Button onClick={saveDraft}>Save Draft</Button>
        {lastSaved && (
          <p className="text-sm text-muted-foreground">
            Last saved: {lastSaved.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
}
