"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder }: SelectProps) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500">
        <RadixSelect.Value placeholder={placeholder} className="text-black" />

        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          sideOffset={8}
          position="popper"
          className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
