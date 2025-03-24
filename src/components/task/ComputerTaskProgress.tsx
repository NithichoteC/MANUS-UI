
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TaskItem } from "./TaskItem";
import { UsageMetrics } from "./UsageMetrics";

interface ComputerTaskProgressProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  taskList: Array<{
    id: string;
    title: string;
    status?: string;
    isCompleted?: boolean;
  }>;
  currentTaskId: string;
  timeSpent: string;
  apiCost: string;
}

export const ComputerTaskProgress: React.FC<ComputerTaskProgressProps> = ({
  isExpanded,
  setIsExpanded,
  taskList,
  currentTaskId,
  timeSpent,
  apiCost
}) => {
  const currentProgress = `${taskList.findIndex(task => task.id === currentTaskId) + 1} / ${taskList.length}`;
  
  return (
    <Collapsible
      open={isExpanded}
      onOpenChange={setIsExpanded}
      className="bg-[#1D1D1D]"
    >
      <div className="p-4 flex items-center justify-between bg-[#1D1D1D] border-t border-[#363537]">
        <h3 className="text-[#D9D9D9] text-[15px] font-medium">Task progress</h3>
        
        <div className="flex items-center">
          <UsageMetrics timeSpent={timeSpent} apiCost={apiCost} />
          
          <span className="text-[#9E9E9E] text-xs mr-3">{currentProgress}</span>
          
          <CollapsibleTrigger asChild>
            <IconButton 
              icon={isExpanded ? 
                <ChevronDown className="w-4 h-4 text-[#ACACAC]" /> : 
                <ChevronUp className="w-4 h-4 text-[#ACACAC]" />
              }
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-transparent hover:bg-[#1A1A1B]"
              aria-label={isExpanded ? "Collapse task progress" : "Expand task progress"} 
            />
          </CollapsibleTrigger>
        </div>
      </div>
      
      <CollapsibleContent>
        <div className="p-4 pt-0">
          {taskList.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              status={task.id === currentTaskId ? task.status : undefined}
              isActive={task.id === currentTaskId}
              isCompleted={task.isCompleted}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
