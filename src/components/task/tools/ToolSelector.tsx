
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type ToolType = "browser" | "search" | "terminal" | "calculator";

interface ToolSelectorProps {
  activeTool: ToolType;
  onToolChange: (tool: ToolType) => void;
}

export const ToolSelector: React.FC<ToolSelectorProps> = ({ activeTool, onToolChange }) => {
  return (
    <ToggleGroup 
      type="single" 
      value={activeTool} 
      onValueChange={(value) => value && onToolChange(value as ToolType)} 
      size="sm"
    >
      <ToggleGroupItem value="browser" className="text-xs px-2 py-1 h-7">Browser</ToggleGroupItem>
      <ToggleGroupItem value="search" className="text-xs px-2 py-1 h-7">Search</ToggleGroupItem>
      <ToggleGroupItem value="terminal" className="text-xs px-2 py-1 h-7">Terminal</ToggleGroupItem>
      <ToggleGroupItem value="calculator" className="text-xs px-2 py-1 h-7">Calculator</ToggleGroupItem>
    </ToggleGroup>
  );
};
