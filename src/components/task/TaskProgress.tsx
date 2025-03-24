
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
import { ComputerScreenView } from "./ComputerScreenView";

interface TaskItem {
  id: string;
  title: string;
  status?: string;
  isCompleted?: boolean;
}

export const TaskProgress: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isComputerScreenOpen, setIsComputerScreenOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<TaskItem>({
    id: "1",
    title: "Explain information policy regarding system limitations",
    status: "Waiting for user..."
  });
  
  const [taskList, setTaskList] = useState<TaskItem[]>([
    {
      id: "1",
      title: "Explain information policy regarding system limitations",
      status: "Waiting for user...",
      isCompleted: false
    },
    {
      id: "2",
      title: "Clarify specific request limitations for self-replication",
      status: "pending",
      isCompleted: false
    },
    {
      id: "3",
      title: "Explain educational approach to AI agent development",
      status: "pending", 
      isCompleted: false
    },
    {
      id: "4",
      title: "Summarize previously provided educational materials",
      status: "pending",
      isCompleted: false
    },
    {
      id: "5",
      title: "Suggest alternative assistance for AI development exploration",
      status: "pending",
      isCompleted: false
    }
  ]);

  const timeSpent = "12m 34s";
  const apiCost = "0.42";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleComputerScreenClick = () => {
    setIsComputerScreenOpen(true);
  };

  const progressText = `${taskList.findIndex(task => task.id === currentTask.id) + 1} / ${taskList.length}`;
  
  // Add a class to the body when computer screen is open to shift the main content
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      if (isComputerScreenOpen) {
        rootElement.classList.add('computer-screen-open');
      } else {
        rootElement.classList.remove('computer-screen-open');
      }
    }
    
    return () => {
      if (rootElement) {
        rootElement.classList.remove('computer-screen-open');
      }
    };
  }, [isComputerScreenOpen]);

  return (
    <>
      <Collapsible 
        open={isExpanded} 
        onOpenChange={setIsExpanded}
        className={cn(
          "w-[900px] rounded-[20px] overflow-hidden bg-[#272728] border border-[#363537] max-md:w-[600px] max-sm:w-[95%]",
          isComputerScreenOpen && "ml-[-175px]"
        )}
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
                status={currentTask.status}
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

            <TaskItem 
              title={currentTask.title}
              status={currentTask.status}
              isActive={true}
            />

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

      <ComputerScreenView 
        open={isComputerScreenOpen}
        onOpenChange={setIsComputerScreenOpen}
        taskList={[
          { id: "1", title: "Conduct comprehensive research on subscription-based business models", isCompleted: true },
          { id: "2", title: "Analyze market trends and potential business opportunities", isCompleted: true },
          { id: "3", title: "Identify top subscription business opportunities with AI agent integration", isCompleted: true },
          { id: "4", title: "Research and evaluate required APIs and integration possibilities", status: "I have stopped", isCompleted: false },
          { id: "5", title: "Design web application architecture", isCompleted: false },
          { id: "6", title: "Develop frontend components of the web application", isCompleted: false },
          { id: "7", title: "Implement backend functionality with API integration", isCompleted: false },
          { id: "8", title: "Conduct comprehensive testing and deploy web application", isCompleted: false }
        ]}
        currentTaskId="4"
      />
    </>
  );
};
