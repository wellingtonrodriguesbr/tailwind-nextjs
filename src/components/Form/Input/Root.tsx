import { ComponentProps } from "react";

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...props }: RootProps) {
  return (
    <div
      className="w-full flex items-center gap-2 border border-zinc-300 rounded-lg px-2 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    ></div>
  );
}
