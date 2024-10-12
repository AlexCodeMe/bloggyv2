"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { newPostSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Editor() {
  const form = useForm<z.infer<typeof newPostSchema>>({
    mode: "onChange",
    resolver: zodResolver(newPostSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });

  const BlockNote = useMemo(
    () =>
      dynamic(() => import("./block-note"), {
        ssr: false,
      }),
    []
  );

  async function onSubmit(values: z.infer<typeof newPostSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter a catchy title..." {...field} />
              </FormControl>
              <FormDescription>
                The title that summarizes your post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Briefly describe your post..." {...field} />
              </FormControl>
              <FormDescription>
                A short, optional description of your post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <BlockNote
                  content={field.value}
                  onChange={() => {
                    const editorContent = form.getValues("content");
                    if (editorContent !== field.value) {
                      field.onChange(editorContent);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-2 mx-auto">
          <Button className="w-50vw">Preview</Button>
          <Button type="submit" className="w-50vw">
            Submit Post
          </Button>
        </div>
      </form>
    </Form>
  );
}
