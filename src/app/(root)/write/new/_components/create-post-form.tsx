"use client";

import React, { useState, useMemo, useEffect } from "react";
import CoverImage from "./cover-image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { loadFromStorage } from "@/lib/uploadthing";
import { createPost } from "@/actions/post-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { User } from "next-auth";

export default function CreatePostForm({ user }: { user: User }) {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [content, setContent] = useState<string>("loading");

  const router = useRouter();

  useEffect(() => {
    loadFromStorage().then((loadedContent) => {
      setContent(loadedContent);
    });
  }, []);

  const BlockNote = useMemo(
    () =>
      dynamic(() => import("./block-note"), {
        ssr: false,
      }),
    []
  );

  async function handleSubmit() {
    console.log(user);
    if (!user) {
      toast.error("Please login to create a post");
      return;
    }

    try {
      const postData = {
        title,
        bannerUrl: url,
        content,
        authorId: user.id as string,
      };
      const post = await createPost(postData);
      toast.success("Post created successfully");
      router.push(`/write/${post.id}`);
    } catch {
      toast.error("Error creating post");
    }
  }

  return (
    <div className="min-h-screen">
      <CoverImage url={url} setUrl={setUrl} />
      <div className="flex flex-col py-10 w-full space-y-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
        />
        {title && <h1 className="text-2xl font-bold">{title}</h1>}
        <BlockNote content={content} onChange={() => {}} />
        <div className="flex justify-between">
          <Button>Preview</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
