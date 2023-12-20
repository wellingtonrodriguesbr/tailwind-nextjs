"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="px-1 pb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-700 dark:hover:text-violet-300 relative data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300 outline-none group"
    >
      <span className="group-focus-visible:bg-zinc-300 dark:group-focus-visible:bg-zinc-800 rounded p-2 whitespace-nowrap">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300 rounded"
        />
      )}
    </Tabs.Trigger>
  );
}
