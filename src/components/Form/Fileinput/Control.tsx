import { ComponentProps } from "react";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ ...props }: ControlProps) {
  return <input className="sr-only" type="file" id="photo" {...props} />;
}
