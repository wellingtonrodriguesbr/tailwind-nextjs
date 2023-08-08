import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="flex items-center gap-3 font-medium text-zinc-700 group hover:bg-violet-50 hover:text-violet-500 px-3 py-2 rounded"
    >
      <Icon className="w-6 h-6 text-zinc-500" />
      {title}
      <ChevronDown className="ml-auto w-5 h-5 text-zinc-500 group-hover:text-violet-400" />
    </a>
  );
}
