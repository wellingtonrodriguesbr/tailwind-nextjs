import { ComponentProps } from "react";

interface PrefixProps extends ComponentProps<"div"> {}

export function Prefix({ ...props }: PrefixProps) {
  return <div {...props}></div>;
}
