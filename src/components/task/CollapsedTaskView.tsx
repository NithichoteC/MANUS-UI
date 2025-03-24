
import React from "react";
import { ComputerScreen } from "./ComputerScreen";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CollapsedTaskViewProps {
  title: string;
  status: string;
  onComputerScreenClick: () => void;
}

export const CollapsedTaskView: React.FC<CollapsedTaskViewProps> = ({ 
  title, 
  status,
  onComputerScreenClick
}) => {
  return (
    <div className="flex items-center">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="mr-3 cursor-pointer" onClick={onComputerScreenClick}>
              <ComputerScreen size="small" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10} className="bg-[#272728]/90 backdrop-blur-sm border border-[#363537] text-[#D9D9D9]">
            <p className="text-xs">View computer screen</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div>
        <p className="text-[#D9D9D9] text-[15px]">{title}</p>
        <p className="text-[#9E9E9E] text-[13px]">{status}</p>
      </div>
    </div>
  );
};
