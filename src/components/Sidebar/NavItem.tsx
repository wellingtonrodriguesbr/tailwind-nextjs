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
      className="flex items-center gap-3 font-medium text-zinc-700 dark:text-zinc-100 group hover:bg-violet-50 dark:hover:bg-zinc-800 hover:text-violet-500 dark:hover:text-violet-300 px-3 py-2 rounded"
    >
      <Icon className="w-6 h-6 text-zinc-500" />
      {title}
      <ChevronDown className="ml-auto w-5 h-5 text-zinc-500 group-hover:text-violet-400 dark:group-hover:text-violet-300" />
    </a>
  );
}
