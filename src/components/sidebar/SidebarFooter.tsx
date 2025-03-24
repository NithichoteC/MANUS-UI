
import React from "react";
import { IconButton } from "@/components/ui/IconButton";
import { Separator } from "@/components/ui/separator";
import { SettingsDialog } from "@/components/settings/SettingsDialog";
import { KnowledgeDialog } from "@/components/knowledge/KnowledgeDialog";
import { BookIcon } from "lucide-react";

interface SidebarFooterProps {
  isCollapsed: boolean;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed }) => {
  return (
    <div className="mt-auto">
      <Separator className="w-full bg-[#2a2a2b]" />
      <div className={`flex px-3 py-2.5 ${isCollapsed ? "justify-center" : "justify-end gap-[16px]"}`}>
        {isCollapsed ? (
          <KnowledgeDialog />
        ) : (
          <>
            <KnowledgeDialog />
            <SettingsDialog />
          </>
        )}
      </div>
    </div>
  );
};
