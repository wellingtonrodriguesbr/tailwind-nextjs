"use client";

import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return null;
    }

    const files = Array.from(event.target.files);

    onFilesSelected(files);
  }

  return (
    <input
      className="sr-only"
      type="file"
      id={id}
      onChange={handleFilesSelected}
      {...props}
    />
  );
}
