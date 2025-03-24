
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Clock, DollarSign, MonitorSmartphone, ExternalLink } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface TaskItem {
  id: string;
  title: string;
  status: string;
}

export const TaskProgress: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
  const apiCost = "0.42"; // Removed the dollar sign from here

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const progressText = `${taskList.findIndex(task => task.id === currentTask.id) + 1} / ${taskList.length}`;

  return (
    <Collapsible 
      open={isExpanded} 
      onOpenChange={setIsExpanded}
      className={cn(
        "w-[644px] rounded-[20px] overflow-hidden border mb-4 max-md:w-[500px] max-sm:w-[90%] transition-all duration-200",
        isExpanded 
          ? "bg-[#272728] border-[#363537]" 
          : "bg-black/50 border-[#363537]/70"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header section - always visible */}
      <div className={cn(
        "flex items-center justify-between p-4 h-[60px]",
        isExpanded ? "bg-[#272728]" : "bg-transparent"
      )}>
        <div className="flex items-center">
          {/* Computer screen icon or thumbnail */}
          <div className="mr-4 relative">
            <div className={cn(
              "relative overflow-hidden",
              isExpanded 
                ? "w-[42px] h-[42px] rounded-md bg-[#1D1D1D]" 
                : "w-[140px] h-[78px] rounded-md"
            )}>
              {isExpanded ? (
                <div className="flex items-center justify-center w-full h-full">
                  <MonitorSmartphone className="w-5 h-5 text-[#6A6A6A]" />
                </div>
              ) : (
                <div className="w-full h-full bg-[#1A1525] relative px-2 py-1.5 text-[9px]">
                  <div className="text-[#8a77df] font-mono">
                    # Functional Usage
                  </div>
                  <div className="text-[#6f6b7b] font-mono text-[7px]">
                    System IP: 255.55.235.30
                  </div>
                  <div className="text-[#6b6a72] font-mono leading-tight mt-1 text-[7px]">
                    This Computer provides a repository of how to and safety limitations around AI systems, future and present concepts usider than specific grounding dependent text generative models. User specific responses, I don't...
                  </div>
                  <div className="absolute bottom-0.5 left-2 text-[#8a77df] font-mono text-[7px]">
                    UI_Proto_Version_7a3fa2d23a394d…
                  </div>
                  {isHovered && (
                    <div className="absolute bottom-1 right-1 bg-white/10 rounded-full p-0.5">
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* Hover view text */}
            {isHovered && !isExpanded && (
              <div className="absolute -top-8 left-0 bg-black text-white text-xs py-1 px-3 rounded-md whitespace-nowrap">
                View Manus's computer
              </div>
            )}
          </div>
          
          {/* Title and status */}
          <div>
            {isExpanded ? (
              <>
                <span className="text-[#D9D9D9] text-[17px]">Manus's computer</span>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-md bg-[#2C2C2C] flex items-center justify-center mr-2">
                      <span className="text-[#9E9E9E] text-[10px]">⌘</span>
                    </div>
                    <span className="text-[#9E9E9E] text-[12px]">Manus is using</span>
                    <span className="text-[#D9D9D9] text-[12px] ml-1">Editor</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#FFC700] flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFC700]"></div>
                  </div>
                  <span className="text-[#D9D9D9] text-[15px]">{currentTask.title}</span>
                </div>
                <span className="text-[#9E9E9E] text-[13px] ml-7">{currentTask.status}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Usage metrics and toggle button */}
        <div className="flex items-center">
          {/* Only show metrics when expanded */}
          {isExpanded && (
            <>
              {/* Time spent */}
              <div className="flex items-center mr-3 text-[#9E9E9E] text-xs">
                <Clock className="w-3 h-3 mr-1" />
                <span>{timeSpent}</span>
              </div>
              
              {/* API cost */}
              <div className="flex items-center mr-3 text-[#9E9E9E] text-xs">
                <DollarSign className="w-3 h-3 mr-1" />
                <span>{apiCost}</span>
              </div>
            </>
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
            <span className="text-[#9E9E9E] text-xs">{progressText}</span>
          </div>

          {/* Active task */}
          <div className="mb-4">
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="w-5 h-5 rounded-full border border-[#FFC700] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
              <div>
                <p className="text-[#D9D9D9] text-[15px]">{currentTask.title}</p>
                <p className="text-[#9E9E9E] text-[13px]">{currentTask.status}</p>
              </div>
            </div>
          </div>

          {/* Other tasks */}
          {taskList.slice(1).map((task) => (
            <div key={task.id} className="mb-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Clock className="w-5 h-5 text-[#5A5A5A]" />
                </div>
                <div>
                  <p className="text-[#9E9E9E] text-[15px]">{task.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
