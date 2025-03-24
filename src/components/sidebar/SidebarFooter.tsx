
import React from "react";
import { IconButton } from "@/components/ui/IconButton";
import { BookIcon, SettingsIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

interface SidebarFooterProps {
  isCollapsed: boolean;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed }) => {
  return (
    <div className="mt-auto">
      <Separator className="w-full bg-[#2a2a2b] mb-3" />
      <div className={`flex p-3 ${isCollapsed ? "justify-center" : "justify-end gap-[25px]"}`}>
        {isCollapsed ? (
          <IconButton icon={<BookIcon />} aria-label="Library" />
        ) : (
          <>
            <IconButton icon={<BookIcon />} aria-label="Library" />
            <IconButton icon={<SettingsIcon />} aria-label="Settings" />
          </>
        )}
      </div>
    </div>
  );
};
