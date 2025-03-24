
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ComputerScreen } from "./ComputerScreen";
import { DeviceInfo } from "./DeviceInfo";
import { UsageMetrics } from "./UsageMetrics";
import { TaskItem } from "./TaskItem";
import { CollapsedTaskView } from "./CollapsedTaskView";
import { ComputerScreenView } from "./ComputerScreenView";

interface TaskItem {
  id: string;
  title: string;
  status: string;
}

export const TaskProgress: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentTask, setCurrentTask] = useState<TaskItem>({
    id: "1",
    title: "Explain information policy regarding system limitations",
    status: "Waiting for user..."
  });
  
  const [taskList, setTaskList] = useState<TaskItem[]>([
    {
      id: "1",
      title: "Explain information policy regarding system limitations",
      status: "Waiting for user..."
    },
    {
      id: "2",
      title: "Clarify specific request limitations for self-replication",
      status: "pending"
    },
    {
      id: "3",
      title: "Explain educational approach to AI agent development",
      status: "pending"
    },
    {
      id: "4",
      title: "Summarize previously provided educational materials",
      status: "pending"
    },
    {
      id: "5",
      title: "Suggest alternative assistance for AI development exploration",
      status: "pending"
    }
  ]);

  // Mock data for time and cost tracking
  const timeSpent = "12m 34s";
  const apiCost = "0.42";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const progressText = `${taskList.findIndex(task => task.id === currentTask.id) + 1} / ${taskList.length}`;

  return (
    <Collapsible 
      open={isExpanded} 
      onOpenChange={setIsExpanded}
      className="w-[900px] rounded-[20px] overflow-hidden bg-[#272728] border border-[#363537] max-md:w-[600px] max-sm:w-[95%]"
    >
      {/* Header section - always visible */}
      <div className={cn(
        "flex items-center justify-between p-4 bg-[#272728]",
        isExpanded ? "h-auto py-5" : "h-[60px]"
      )}>
        <div className="flex items-center">
          {isExpanded ? (
            <>
              <div className="mr-4">
                <ComputerScreenView
                  taskList={taskList}
                  currentTask={currentTask}
                />
              </div>
              <DeviceInfo name="Manus" application="Editor" />
            </>
          ) : (
            <CollapsedTaskView 
              title={currentTask.title}
              status={currentTask.status}
            />
          )}
        </div>
        
        {/* Usage metrics and toggle button */}
        <div className="flex items-center">
          {/* Only show metrics when expanded */}
          {isExpanded && (
            <UsageMetrics timeSpent={timeSpent} apiCost={apiCost} />
          )}
          
          {/* Progress indicator - always visible */}
          <span className="text-[#9E9E9E] text-xs mr-3">{progressText}</span>
          
          {/* Expand/Collapse button */}
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

      {/* Task progress section - visible only when expanded */}
      <CollapsibleContent>
        <div className="bg-[#1D1D1D] p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#D9D9D9] text-[15px] font-medium">Task progress</h3>
          </div>

          {/* Active task */}
          <TaskItem 
            title={currentTask.title}
            status={currentTask.status}
            isActive={true}
          />

          {/* Other tasks */}
          {taskList.slice(1).map((task) => (
            <TaskItem 
              key={task.id}
              title={task.title}
              isActive={false}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
