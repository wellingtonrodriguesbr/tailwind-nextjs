"use client";

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

interface RootProps extends ComponentProps<"div"> {}

interface FileInputContextData {
  id: string;
  files: File[];
  onFilesSelected: (files: File[]) => void;
}

const FileInputContext = createContext({} as FileInputContextData);

export function Root({ ...props }: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props}></div>
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
