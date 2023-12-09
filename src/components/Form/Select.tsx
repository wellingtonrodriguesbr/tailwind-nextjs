"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

export function Select() {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500">
        <RadixSelect.Value
          placeholder="Select a country..."
          className="text-black"
        />

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
          <RadixSelect.Viewport>
            <RadixSelect.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <RadixSelect.ItemText className="text-black">
                United States
              </RadixSelect.ItemText>
              <RadixSelect.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </RadixSelect.ItemIndicator>
            </RadixSelect.Item>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
