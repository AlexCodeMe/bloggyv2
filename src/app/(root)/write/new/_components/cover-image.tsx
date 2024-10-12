"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { toast } from "sonner";

export default function CoverImage({
  url,
  setUrl,
}: {
  url: string;
  setUrl: (url: string) => void;
}) {
  // Load the image URL from local storage when the component mounts
  useEffect(() => {
    const savedUrl = localStorage.getItem("coverImageUrl");
    if (savedUrl) {
      setUrl(savedUrl);
    }
  }, [setUrl]);

  // Save the image URL to local storage whenever it changes
  useEffect(() => {
    if (url) {
      localStorage.setItem("coverImageUrl", url);
    } else {
      localStorage.removeItem("coverImageUrl");
    }
  }, [url]);

  return (
    <div className="relative w-full h-[35vh] bg-neutral-300 group">
      {!!url && (
        <Image
          src={url}
          alt="cover"
          sizes="100vw"
          className="object-cover"
          fill
          priority
        />
      )}
      <div className="bottom-0 right-0 absolute hidden group-hover:flex space-x-4 mb-4 mr-4">
        {url ? (
          <>
            <UploadButton<OurFileRouter, "imageUploader">
              endpoint="imageUploader"
              onClientUploadComplete={(res: { url: string }[]) => {
                setUrl(res[0].url);
                console.log("Files: ", res);
                toast.success("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                toast.error(`ERROR! ${error.message}`);
              }}
              className="w-fit ut-allowed-content:hidden"
            />
            <Button
              onClick={() => {
                setUrl("");
                toast.success("Cover Image Removed");
              }}
            >
              Remove
            </Button>
          </>
        ) : (
          <UploadButton<OurFileRouter, "imageUploader">
            endpoint="imageUploader"
            onClientUploadComplete={(res: { url: string }[]) => {
              setUrl(res[0].url);
              console.log("Files: ", res);
              toast.success("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              toast.error(`ERROR! ${error.message}`);
            }}
            className="w-fit ut-allowed-content:hidden"
          />
        )}
      </div>
    </div>
  );
}
