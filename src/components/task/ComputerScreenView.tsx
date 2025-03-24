
import React, { useState } from "react";
import { Minimize2 } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { BrowserTool } from "./tools/BrowserTool";
import { SearchTool } from "./tools/SearchTool";
import { TerminalTool } from "./tools/TerminalTool";
import { CalculatorTool } from "./tools/CalculatorTool";
import { ToolSelector, ToolType } from "./tools/ToolSelector";
import { ComputerTaskProgress } from "./ComputerTaskProgress";

interface ComputerScreenViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskList: Array<{
    id: string;
    title: string;
    status?: string;
    isCompleted?: boolean;
  }>;
  currentTaskId: string;
}

export const ComputerScreenView: React.FC<ComputerScreenViewProps> = ({
  open,
  onOpenChange,
  taskList,
  currentTaskId
}) => {
  const [isTaskProgressExpanded, setIsTaskProgressExpanded] = useState(true);
  const [activeTool, setActiveTool] = useState<ToolType>("browser");
  
  // Same metrics as in TaskProgress
  const timeSpent = "12m 34s";
  const apiCost = "0.42";

  if (!open) return null;

  // Determine tool-specific content
  const renderToolContent = () => {
    switch (activeTool) {
      case "browser":
        return <BrowserTool />;
      case "search":
        return <SearchTool />;
      case "terminal":
        return <TerminalTool />;
      case "calculator":
        return <CalculatorTool />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex justify-end z-20 pt-6 pr-6 pb-[22px] pointer-events-none">
      <div 
        className="w-[450px] md:w-[550px] lg:w-[700px] bg-[#272728] border border-[#363537] 
        rounded-[20px] overflow-hidden flex flex-col animate-slide-in-right pointer-events-auto"
        style={{
          boxShadow: "-4px 0px 15px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header with Tool Selector */}
          <div className="p-4 flex items-center justify-between bg-[#272728] border-b border-[#363537]">
            <div className="flex items-center space-x-4">
              <h2 className="text-[#D9D9D9] text-[17px] font-bold">Computer screen</h2>
              
              {/* Tool selector - development only */}
              <ToolSelector activeTool={activeTool} onToolChange={setActiveTool} />
            </div>
            
            <div className="flex items-center">
              <IconButton 
                icon={<Minimize2 className="w-4 h-4 text-[#6A6A6A]" />} 
                className="bg-transparent hover:bg-[#1A1A1B]"
                aria-label="Minimize"
                onClick={() => onOpenChange(false)}
              />
            </div>
          </div>
          
          {/* Tool-specific content */}
          {renderToolContent()}
          
          {/* Task progress section - collapsible */}
          <ComputerTaskProgress 
            isExpanded={isTaskProgressExpanded}
            setIsExpanded={setIsTaskProgressExpanded}
            taskList={taskList}
            currentTaskId={currentTaskId}
            timeSpent={timeSpent}
            apiCost={apiCost}
          />
        </div>
      </div>
    </div>
  );
};
