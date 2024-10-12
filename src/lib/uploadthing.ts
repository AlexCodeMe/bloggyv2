import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { Block } from "@blocknote/core";
import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

export const { uploadFiles } = generateReactHelpers<OurFileRouter>();
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export async function loadFromStorage() {
  const storageString = localStorage.getItem("editorContent");
  return storageString ? (JSON.parse(storageString) as string) : "";
}

export async function saveToStorage(jsonBlocks: Block[]) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}