
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
  // Sample session data matching the screenshot
  const sessions = [
    {
      title: "Best Subscription Busin...",
      days: 3,
      content: "I've completed the analysis of top subsc...",
      icon: "🔍",
    },
    {
      title: "Comparing Phantom Ar...",
      days: 4,
      content: "I've completed a comprehensive analysis...",
      icon: "🔍",
    },
    {
      title: "Comparing Phantom Ar...",
      days: 5,
      content: "Due to the current high service load, task...",
      icon: "👤",
    },
    {
      title: "Phantom Architecture E...",
      days: 5,
      content: "I'm experiencing some technical difficulti...",
      icon: "👤",
    },
    {
      title: "Innovating Perfect Jarvis...",
      days: 5,
      content: "act as top 0.000001 percent group of rese...",
      icon: "👤",
    },
    {
      title: "Phantom Architecture E...",
      days: 9,
      content: "You have reached the maximum daily usa...",
      icon: "👤",
    },
    {
      title: "Phantom AI Architectur...",
      days: 9,
      content: "I've made excellent progress on redesigni...",
      icon: "👤",
    },
    {
      title: "Phantom AI Architectur...",
      days: 9,
      content: "I've created a document-focused modific...",
      icon: "🔍",
    },
    {
      title: "Phantom AI Architectur...",
      days: 9,
      content: "I've made significant progress on your Ph...",
      icon: "🔍",
    },
    {
      title: "Phantom AI Architectur...",
      days: 10,
      content: "I'll create a comprehensive improvement...",
      icon: "👤",
    },
  ];

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
            {!isCollapsed && (
              <span className="ml-auto text-xs text-[#5F5F5F]">Ctrl K</span>
            )}
          </div>
        </button>

        {isCollapsed ? (
          // Session indicators for collapsed state
          <div className="flex flex-col gap-2 mt-4">
            <div className="w-full h-3 bg-[#212122] rounded-sm" />
            <div className="w-full h-3 bg-[#212122] rounded-sm" />
            <div className="w-full h-3 bg-[#212122] rounded-sm" />
            <div className="w-full h-3 bg-[#212122] rounded-sm" />
            <div className="w-full h-3 bg-[#212122] rounded-sm" />
          </div>
        ) : (
          // Session items for expanded state
          <div className="flex flex-col gap-1 mt-2 overflow-y-auto max-h-[calc(100vh-140px)]">
            {sessions.map((session, index) => (
              <button 
                key={index}
                className="flex items-start p-2 rounded-[10px] text-left hover:bg-[#161618] transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2A2B] mr-2 flex-shrink-0 mt-0.5">
                  <span>{session.icon}</span>
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#DADADA] text-sm font-medium truncate max-w-[200px]">
                      {session.title}
                    </p>
                    <span className="text-xs text-[#5F5F5F] ml-2 flex-shrink-0">
                      {session.days} days ago
                    </span>
                  </div>
                  <p className="text-[#9B9B9C] text-xs truncate">
                    {session.content}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={`flex gap-[25px] items-center mt-auto p-3 ${isCollapsed ? "justify-center" : "justify-end"}`}>
        <IconButton icon={<BookIcon />} aria-label="Library" />
        <IconButton icon={<SettingsIcon />} aria-label="Settings" />
      </div>
    </nav>
  );
};
