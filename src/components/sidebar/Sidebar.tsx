
import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarContent } from "./SidebarContent";
import { SidebarFooter } from "./SidebarFooter";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <nav 
      className={`h-full bg-[#212122] flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-14" : "w-[394px] max-md:w-[300px]"
      }`}
    >
      <SidebarHeader isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <SidebarContent isCollapsed={isCollapsed} />
      <SidebarFooter isCollapsed={isCollapsed} />
    </nav>
  );
};
