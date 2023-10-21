import { ComponentProps } from "react";

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...props }: RootProps) {
  return (
    <div
      className="w-full mx-1 flex items-center gap-2 border border-zinc-300 rounded-lg px-2 py-2 shadow-sm"
      {...props}
    ></div>
  );
}
