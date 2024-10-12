"use server";

import prisma from "@/lib/db";

export async function createPost(data: {
  title: string;
  bannerUrl: string;
  content: string;
  authorId: string;
}) {
  const { title, bannerUrl, content, authorId } = data;

  const newPost = await prisma.post.create({
    data: {
      title,
      bannerUrl,
      content,
      authorId,
    },
  });

  return newPost;
}
