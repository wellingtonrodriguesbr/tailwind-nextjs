import { ComponentProps } from "react";

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...props }: RootProps) {
  return (
    <div
      className="w-full flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 rounded-lg px-2 py-2 shadow-sm focus-within:border-violet-300 dark:focus-within:border-zinc-700 focus-within:ring-2 focus-within:ring-violet-100 dark:focus-within:ring-zinc-600 dark:bg-zinc-800"
      {...props}
    ></div>
  );
}
