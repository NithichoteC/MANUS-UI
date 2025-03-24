
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ComputerScreen } from "./ComputerScreen";
import { DeviceInfo } from "./DeviceInfo";
import { UsageMetrics } from "./UsageMetrics";
import { TaskItem } from "./TaskItem";
import { CollapsedTaskView } from "./CollapsedTaskView";

interface TaskItem {
  id: string;
  title: string;
  status?: string;
  isCompleted?: boolean;
}

interface TaskProgressProps {
  onComputerScreenToggle: (open: boolean) => void;
  isComputerScreenOpen: boolean;
  taskList: TaskItem[];
  currentTaskId: string;
}

export const TaskProgress: React.FC<TaskProgressProps> = ({ 
  onComputerScreenToggle, 
  isComputerScreenOpen,
  taskList,
  currentTaskId
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const currentTask = taskList.find(task => task.id === currentTaskId) || taskList[0];
  
  const timeSpent = "12m 34s";
  const apiCost = "0.42";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleComputerScreenClick = () => {
    onComputerScreenToggle(true);
  };

  const progressText = `${taskList.findIndex(task => task.id === currentTask.id) + 1} / ${taskList.length}`;

  if (isComputerScreenOpen) return null;

  return (
    <Collapsible 
      open={isExpanded} 
      onOpenChange={setIsExpanded}
      className="w-[900px] rounded-[20px] overflow-hidden bg-[#272728] border border-[#363537] max-md:w-[600px] max-sm:w-[95%] transition-all duration-300"
    >
      <div className={cn(
        "flex items-center justify-between p-4 bg-[#272728]",
        isExpanded ? "h-auto py-5" : "h-[60px]"
      )}>
        <div className="flex items-center">
          {isExpanded ? (
            <>
              <div className="mr-4 cursor-pointer" onClick={handleComputerScreenClick}>
                <ComputerScreen size="normal" />
              </div>
              <DeviceInfo name="Manus" application="Editor" />
            </>
          ) : (
            <CollapsedTaskView 
              title={currentTask.title}
              status={currentTask.status || ""}
              onComputerScreenClick={handleComputerScreenClick}
            />
          )}
        </div>
        
        <div className="flex items-center">
          {isExpanded && (
            <UsageMetrics timeSpent={timeSpent} apiCost={apiCost} />
          )}
          
          <span className="text-[#9E9E9E] text-xs mr-3">{progressText}</span>
          
          <CollapsibleTrigger asChild>
            <IconButton 
              icon={isExpanded ? <ChevronDown className="w-4 h-4 text-[#ACACAC]" /> : <ChevronUp className="w-4 h-4 text-[#ACACAC]" />}
              onClick={toggleExpand}
              className="bg-transparent hover:bg-[#1A1A1B]"
              aria-label={isExpanded ? "Collapse task progress" : "Expand task progress"} 
            />
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent>
        <div className="bg-[#1D1D1D] p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#D9D9D9] text-[15px] font-medium">Task progress</h3>
          </div>

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
