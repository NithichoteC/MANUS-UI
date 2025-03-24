
import React, { useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { MenuIcon, SearchIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";

interface SidebarHeaderProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isCollapsed, toggleSidebar }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
  );
};
