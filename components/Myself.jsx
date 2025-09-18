"use client";;
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://www.instagram.com/gulshanpatel044/" className="font-bold">
          Gulshan Patel
        </LinkPreview>{" "}
        </p>
    </div>
  );
}
