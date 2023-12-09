import { ComponentProps } from "react";

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...props }: RootProps) {
  return (
    <div
      className="w-full flex items-center gap-2 border border-zinc-300 rounded-lg px-2 py-2 shadow-sm"
      {...props}
    ></div>
  );
}
