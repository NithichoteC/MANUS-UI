
import React from "react";
import { IconButton } from "@/components/ui/IconButton";
import { Separator } from "@/components/ui/separator";
import { SettingsDialog } from "@/components/settings/SettingsDialog";
import { KnowledgeDialog } from "@/components/knowledge/KnowledgeDialog";
import { BookIcon, SettingsIcon } from "@/components/icons";

interface SidebarFooterProps {
  isCollapsed: boolean;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed }) => {
  return (
    <div className="mt-auto">
      <Separator className="w-full bg-[#2a2a2b] mb-2" />
      <div className={`flex p-2 ${isCollapsed ? "justify-center" : "justify-end gap-[25px]"}`}>
        {isCollapsed ? (
          <IconButton icon={<BookIcon />} aria-label="Knowledge Base" />
        ) : (
          <>
            <IconButton icon={<BookIcon />} aria-label="Knowledge Base">
              <KnowledgeDialog />
            </IconButton>
            <IconButton icon={<SettingsIcon />} aria-label="Settings">
              <SettingsDialog />
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
};
