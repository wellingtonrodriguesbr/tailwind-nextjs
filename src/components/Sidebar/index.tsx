import { Search } from "lucide-react";
import { Logo } from "./Logo";

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 pt-8 space-y-6">
      <Logo />
      <div className="w-full flex items-center gap-2 border border-zinc-300 rounded-lg px-2 py-2 shadow-sm">
        <Search className="w-5 h-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-600 outline-none"
          placeholder="Search"
          type="text"
        />
      </div>
    </aside>
  );
}
