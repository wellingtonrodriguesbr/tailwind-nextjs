import { UploadCloud } from "lucide-react";

export function Trigger() {
  return (
    <label
      htmlFor="photo"
      className="flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm group"
    >
      <div className="rounded-full border-[6px] border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 transition-colors">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="text-violet-700 font-semibold">Click to upload</span>{" "}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPP or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
