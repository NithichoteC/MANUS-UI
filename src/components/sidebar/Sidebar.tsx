
import React from "react";
import { IconButton } from "@/components/ui/IconButton";
import {
  MenuIcon,
  SearchIcon,
  BookIcon,
  SettingsIcon,
  PlusIcon,
} from "@/components/icons";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <nav 
      className={`h-full bg-[#212122] flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-[394px] max-md:w-[300px]"
      }`}
    >
      <div className={`flex items-center p-3 ${isCollapsed ? "justify-center" : "justify-between"}`}>
        <IconButton 
          icon={<MenuIcon />} 
          aria-label="Menu" 
          onClick={toggleSidebar}
          className="cursor-pointer"
        />
        <IconButton 
          icon={<SearchIcon />} 
          aria-label="Search" 
          className={isCollapsed ? "hidden" : "block"}
        />
      </div>

      <div className="flex flex-col gap-[9px] p-3">
        <button
          className={`flex justify-center items-center bg-[#323233] cursor-pointer p-3 rounded-[10px] hover:bg-[#3a3a3b] transition-colors ${
            isCollapsed ? "p-2" : ""
          }`}
          aria-label="Create new task"
        >
          <div className={`flex items-center ${isCollapsed ? "" : "gap-1.5"}`}>
            <PlusIcon />
            <span className={`text-neutral-300 text-center text-base font-semibold ${
              isCollapsed ? "hidden" : "block"
            }`}>
              New task
            </span>
          </div>
        </button>

        {isCollapsed ? (
          // Session indicators for collapsed state
          <div className="flex flex-col gap-2 mt-4">
            <div className="w-full h-3 bg-[#3A3A3B] rounded-sm" />
            <div className="w-full h-3 bg-[#343435] rounded-sm" />
            <div className="w-full h-3 bg-[#2E2E2F] rounded-sm" />
            <div className="w-full h-3 bg-[#292929] rounded-sm" />
            <div className="w-full h-3 bg-[#252526] rounded-sm" />
          </div>
        ) : (
          // Task placeholders for expanded state
          <>
            <div className="w-full h-12 bg-[#242425] rounded-[10px]" />
            <div className="w-full h-12 bg-[#222223] rounded-[10px]" />
            <div className="w-full h-12 bg-[#202021] rounded-[10px]" />
          </>
        )}
      </div>

      <div className={`flex gap-[25px] items-center mt-auto p-3 ${isCollapsed ? "justify-center" : "justify-end"}`}>
        <IconButton icon={<BookIcon />} aria-label="Library" />
        <IconButton icon={<SettingsIcon />} aria-label="Settings" />
      </div>
    </nav>
  );
};
