
import React from "react";
import { ComputerScreen } from "./ComputerScreen";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ComputerScreenView } from "./ComputerScreenView";

interface CollapsedTaskViewProps {
  title: string;
  status: string;
}

export const CollapsedTaskView: React.FC<CollapsedTaskViewProps> = ({ title, status }) => {
  // Mock data for computerScreenView in collapsed mode
  const mockCurrentTask = {
    id: "1",
    title: "Explain information policy regarding system limitations",
    status: "Waiting for user..."
  };
  
  const mockTaskList = [
    mockCurrentTask,
    {
      id: "2",
      title: "Clarify specific request limitations for self-replication",
      status: "pending"
    }
  ];

  return (
    <div className="flex items-center">
      <div className="mr-3">
        <ComputerScreenView
          taskList={mockTaskList}
          currentTask={mockCurrentTask}
        />
      </div>
      <div>
        <p className="text-[#D9D9D9] text-[15px]">{title}</p>
        <p className="text-[#9E9E9E] text-[13px]">{status}</p>
      </div>
    </div>
  );
};
