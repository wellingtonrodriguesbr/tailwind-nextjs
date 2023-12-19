import { ComponentProps } from "react";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ ...props }: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-600 outline-none"
      {...props}
    />
  );
}
