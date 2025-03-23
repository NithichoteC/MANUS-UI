import React from "react";
import { IconButton } from "@/components/ui/IconButton";
import {
  MenuIcon,
  SearchIcon,
  BookIcon,
  SettingsIcon,
  PlusIcon,
} from "@/components/icons";

export const Sidebar: React.FC = () => {
  return (
    <nav className="w-[394px] h-full bg-[#212122] flex flex-col max-md:w-[300px] max-sm:w-20">
      <div className="flex items-center justify-between p-3">
        <IconButton icon={<MenuIcon />} aria-label="Menu" />
        <IconButton icon={<SearchIcon />} aria-label="Search" />
      </div>

      <div className="flex flex-col gap-[9px] p-3">
        <button
          className="flex justify-center items-center bg-[#323233] cursor-pointer p-3 rounded-[10px] hover:bg-[#3a3a3b] transition-colors"
          aria-label="Create new task"
        >
          <div className="flex items-center gap-1.5">
            <PlusIcon />
            <span className="text-neutral-300 text-center text-base font-semibold max-sm:hidden">
              New task
            </span>
          </div>
        </button>

        {/* Task placeholders */}
        <div className="w-full h-12 bg-[#242425] rounded-[10px]" />
        <div className="w-full h-12 bg-[#242425] rounded-[10px]" />
        <div className="w-full h-12 bg-[#242425] rounded-[10px]" />
      </div>

      <div className="flex gap-[25px] items-center justify-end mt-auto p-3 max-sm:justify-center">
        <IconButton icon={<BookIcon />} aria-label="Library" />
        <IconButton icon={<SettingsIcon />} aria-label="Settings" />
      </div>
    </nav>
  );
};
