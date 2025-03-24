
import React, { useState, useRef } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { MenuIcon, SearchIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface SidebarHeaderProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isCollapsed, toggleSidebar }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const expandSearch = () => {
    setIsSearchExpanded(true);
    // Focus the input after it's rendered
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  };

  const closeSearch = () => {
    setIsSearchExpanded(false);
    setSearchValue("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`flex items-center p-3 ${isCollapsed ? "justify-center h-[58px]" : "justify-between h-[58px]"}`}>
      {isSearchExpanded ? (
        <div className="absolute inset-x-0 top-0 z-20 flex items-center bg-[#212122] h-[58px] px-3">
          <div className="relative flex items-center w-full">
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search tasks..."
              value={searchValue}
              onChange={handleSearchChange}
              autoFocus
              className="w-full h-10 bg-[#1A1A1B] border-none text-neutral-300 pl-10 pr-10 py-1 rounded-md"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </div>
            <button 
              onClick={closeSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <IconButton 
            icon={<MenuIcon />} 
            aria-label="Menu" 
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
          
          {!isCollapsed && (
            <IconButton 
              icon={<SearchIcon />} 
              aria-label="Search" 
              onClick={expandSearch}
              className="cursor-pointer"
            />
          )}
        </>
      )}
    </div>
  );
};
