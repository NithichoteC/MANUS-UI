
import React from "react";
import { ComputerScreen } from "./ComputerScreen";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CollapsedTaskViewProps {
  title: string;
  status: string;
}

export const CollapsedTaskView: React.FC<CollapsedTaskViewProps> = ({ title, status }) => {
  return (
    <div className="flex items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="mr-3">
              <ComputerScreen />
            </div>
          </TooltipTrigger>
          <TooltipContent side="top">
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
