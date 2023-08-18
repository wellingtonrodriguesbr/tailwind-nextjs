import { ComponentProps } from "react";

interface InputPrefixProps extends ComponentProps<"div"> {}

export function InputPrefix({ ...props }: InputPrefixProps) {
  return <div {...props}></div>;
}

interface InputControlProps extends ComponentProps<"input"> {}

export function InputControl({ ...props }: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-600 outline-none"
      {...props}
    />
  );
}

interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot({ ...props }: InputRootProps) {
  return (
    <div
      className="w-full mx-1 flex items-center gap-2 border border-zinc-300 rounded-lg px-2 py-2 shadow-sm"
      {...props}
    ></div>
  );
}
