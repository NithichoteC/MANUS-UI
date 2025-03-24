
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
    <div className={`relative flex items-center px-3 py-2.5 ${isCollapsed ? "justify-center h-[58px]" : "justify-between h-[58px]"}`}>
      {isSearchExpanded ? (
        <div className="absolute inset-x-0 top-0 z-20 bg-[#212122] flex items-center h-[58px] px-3 pt-2">
          <div className="relative flex items-center w-full">
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search task..."
              value={searchValue}
              onChange={handleSearchChange}
              autoFocus
              className="w-full h-10 bg-[#3C3C3D] border-0 outline-none shadow-none text-[#5A5A5A] pl-8 pr-8 py-1 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="w-4 h-4 text-[#5A5A5A]" />
            </div>
            <button 
              onClick={closeSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5A5A5A] hover:text-white"
            >
              <X size={16} />
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
              icon={<SearchIcon className="w-5 h-5" />} 
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
