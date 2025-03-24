
import React, { useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import {
  MenuIcon,
  SearchIcon,
  BookIcon,
  SettingsIcon,
  PlusIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

interface SessionData {
  id: number;
  title: string;
  subtitle: string;
  days: number;
  avatarType: "user" | "ai";
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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

  const expandSearch = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchBlur = () => {
    if (!searchValue) {
      setIsSearchExpanded(false);
    }
  };

  return (
    <nav 
      className={`h-full bg-[#212122] flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-14" : "w-[394px] max-md:w-[300px]"
      }`}
    >
      <div className={`flex items-center p-3 ${isCollapsed ? "justify-center h-[58px]" : "justify-between h-[58px]"}`}>
        <IconButton 
          icon={<MenuIcon />} 
          aria-label="Menu" 
          onClick={toggleSidebar}
          className="cursor-pointer"
        />
        
        {!isCollapsed && (
          <div className="relative flex items-center">
            {isSearchExpanded ? (
              <Input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
                onBlur={handleSearchBlur}
                autoFocus
                className="w-[200px] h-8 bg-[#323233] border-none text-neutral-300 pl-3 pr-8 py-1 rounded-md mr-[-34px]"
              />
            ) : null}
            <IconButton 
              icon={<SearchIcon />} 
              aria-label="Search" 
              onClick={expandSearch}
              className={`${isSearchExpanded ? "relative z-10" : ""}`}
            />
          </div>
        )}
      </div>

      {!isCollapsed && (
        <div className="flex flex-col gap-[9px] p-3 flex-1 overflow-hidden">
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

          <div className="flex-1 min-h-0 overflow-hidden relative">
            {/* Gradient fade at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#212122] to-transparent z-10 pointer-events-none"></div>
            
            <ScrollArea className="h-full pr-2">
              <div className="flex flex-col gap-2 w-full pb-[6px]">
                {sessionData.map((session) => (
                  <div 
                    key={session.id} 
                    className="w-full h-auto min-h-[72px] bg-[#212122] hover:bg-[#161618] rounded-[10px] transition-colors cursor-pointer p-3"
                  >
                    <div className="flex gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        session.avatarType === "user" ? "bg-[#4e4e4f]" : "bg-[#363537]"
                      }`}>
                        {session.avatarType === "user" ? (
                          <span className="text-white text-xs">👤</span>
                        ) : (
                          <span className="text-white text-xs">🤖</span>
                        )}
                      </div>
                      <div className="flex flex-col overflow-hidden flex-grow">
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-300 font-medium text-sm truncate max-w-[200px]">
                            {session.title}
                          </span>
                          <span className="text-neutral-500 text-xs whitespace-nowrap ml-2">
                            {session.days} days ago
                          </span>
                        </div>
                        <p className="text-neutral-500 text-xs mt-1 truncate">
                          {session.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}

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
    </nav>
  );
};
