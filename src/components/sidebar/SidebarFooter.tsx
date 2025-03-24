
import React from "react";
import { IconButton } from "@/components/ui/IconButton";
import { Separator } from "@/components/ui/separator";
import { SettingsDialog } from "@/components/settings/SettingsDialog";
import { KnowledgeDialog } from "@/components/knowledge/KnowledgeDialog";

interface SidebarFooterProps {
  isCollapsed: boolean;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed }) => {
  return (
    <div className="mt-auto">
      <Separator className="w-full bg-[#2a2a2b] mb-3" />
      <div className={`flex p-3 ${isCollapsed ? "justify-center" : "justify-end gap-[25px]"}`}>
        {isCollapsed ? (
          <IconButton icon={<KnowledgeDialog />} aria-label="Knowledge Base" />
        ) : (
          <>
            <div className="hover:bg-[#1A1A1B] rounded-md transition-colors">
              <KnowledgeDialog />
            </div>
            <div className="hover:bg-[#1A1A1B] rounded-md transition-colors">
              <SettingsDialog />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
