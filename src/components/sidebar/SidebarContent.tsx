
import React from "react";
import { PlusIcon } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SessionItem, SessionData } from "./SessionItem";

interface SidebarContentProps {
  isCollapsed: boolean;
}

export const SidebarContent: React.FC<SidebarContentProps> = ({ isCollapsed }) => {
  const sessionData: SessionData[] = [
    {
      id: 1,
      title: "Best Subscription Business",
      subtitle: "I've completed the analysis of top subscri...",
      days: 3,
      avatarType: "user"
    },
    {
      id: 2,
      title: "Comparing Phantom Ar...",
      subtitle: "I've completed a comprehensive analysis ...",
      days: 4,
      avatarType: "user"
    },
    {
      id: 3,
      title: "Comparing Phantom Ar...",
      subtitle: "Due to the current high service load, task...",
      days: 5,
      avatarType: "ai"
    },
    {
      id: 4,
      title: "Phantom Architecture F...",
      subtitle: "I'm experiencing some technical difficultl...",
      days: 5,
      avatarType: "ai"
    },
    {
      id: 5,
      title: "Innovating Perfect Jarvis...",
      subtitle: "act as top 0.000001 percent group of rese...",
      days: 5,
      avatarType: "ai"
    },
    {
      id: 6,
      title: "Phantom Architecture F...",
      subtitle: "You have reached the maximum daily usa...",
      days: 9,
      avatarType: "ai"
    },
    {
      id: 7,
      title: "Phantom AI Architectur...",
      subtitle: "I've made excellent progress on redesigni...",
      days: 9,
      avatarType: "ai"
    },
    {
      id: 8,
      title: "Phantom AI Architectur...",
      subtitle: "I've created a document-focused modific...",
      days: 9,
      avatarType: "user"
    },
    {
      id: 9,
      title: "Phantom AI Architectur...",
      subtitle: "I've made significant progress on your Ph...",
      days: 9,
      avatarType: "user"
    },
    {
      id: 10,
      title: "Phantom AI Architectur...",
      subtitle: "I'll create a comprehensive improvement ...",
      days: 10,
      avatarType: "ai"
    }
  ];

  if (isCollapsed) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[6px] px-3 py-2 flex-1 overflow-hidden">
      <button
        className="flex justify-center items-center bg-[#323233] cursor-pointer p-3 rounded-[10px] hover:bg-[#3a3a3b] transition-colors"
        aria-label="Create new task"
      >
        <div className="flex items-center gap-1.5">
          <PlusIcon />
          <span className="text-neutral-300 text-center text-base font-semibold">
            New task
          </span>
          <div className="ml-1 px-1.5 py-0.5 bg-[#4e4e4f] rounded text-xs text-neutral-400">
            Ctrl
          </div>
          <div className="px-1.5 py-0.5 bg-[#4e4e4f] rounded text-xs text-neutral-400">
            K
          </div>
        </div>
      </button>

      <div className="flex-1 min-h-0 overflow-hidden relative mt-[12px]">
        {/* Gradient fade at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#212122] to-transparent z-10 pointer-events-none"></div>
        
        <ScrollArea className="h-full pr-2">
          <div className="flex flex-col gap-2 w-full pb-[6px]">
            {sessionData.map((session) => (
              <SessionItem key={session.id} session={session} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
