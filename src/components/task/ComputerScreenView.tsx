
import React, { useState } from "react";
import { X, Maximize2, Minimize2, ChevronDown, ChevronUp } from "lucide-react";
import { TaskItem } from "./TaskItem";
import { IconButton } from "@/components/ui/IconButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { UsageMetrics } from "./UsageMetrics";

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
  const currentTask = taskList.find(task => task.id === currentTaskId);
  const currentProgress = `${taskList.findIndex(task => task.id === currentTaskId) + 1} / ${taskList.length}`;
  
  // Same metrics as in TaskProgress
  const timeSpent = "12m 34s";
  const apiCost = "0.42";

  if (!open) return null;

  return (
    <div 
      className="fixed top-0 right-0 h-full w-[450px] md:w-[550px] lg:w-[700px] bg-[#272728] border-l border-[#363537] z-20 
      rounded-l-[20px] overflow-hidden flex flex-col animate-slide-in-right"
      style={{
        boxShadow: "-4px 0px 15px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 flex items-center justify-between bg-[#272728] border-b border-[#363537]">
          <h2 className="text-[#D9D9D9] text-[17px]">Computer screen</h2>
          <div className="flex items-center space-x-2">
            <IconButton 
              icon={<Minimize2 className="w-4 h-4 text-[#6A6A6A]" />} 
              className="bg-transparent hover:bg-[#1A1A1B]"
              aria-label="Minimize"
            />
            <IconButton 
              icon={<Maximize2 className="w-4 h-4 text-[#6A6A6A]" />} 
              className="bg-transparent hover:bg-[#1A1A1B]"
              aria-label="Maximize"
            />
            <IconButton 
              icon={<X className="w-4 h-4 text-[#6A6A6A]" />} 
              className="bg-transparent hover:bg-[#1A1A1B]"
              aria-label="Close"
              onClick={() => onOpenChange(false)}
            />
          </div>
        </div>
        
        {/* Device info */}
        <div className="p-4 bg-[#272728] flex items-center">
          <div className="w-[42px] h-[42px] rounded-md bg-[#1D1D1D] flex items-center justify-center mr-4">
            <span className="text-[#6A6A6A]">⌘</span>
          </div>
          <div>
            <div className="text-[#9E9E9E] text-[13px]">I am using Browser</div>
            <div className="flex items-center text-[#9E9E9E] text-[13px] mt-1">
              <span>Browsing</span>
              <span className="ml-2 font-mono text-[12px] text-[#6A6A6A]">https://stripe.com/resources/more/payment-application-program-inte...</span>
            </div>
          </div>
        </div>
        
        {/* Browser content */}
        <div className="flex-1 bg-[#1D1D1D] overflow-y-auto">
          <div className="p-4">
            <div className="w-full h-10 flex items-center justify-center bg-[#272728] rounded-t-md">
              <span className="text-[#9E9E9E] text-xs">https://stripe.com/resources/more/...</span>
            </div>
            <div className="bg-white w-full h-[400px] p-4 overflow-y-auto">
              <img 
                src="/lovable-uploads/5fcfaec2-0aa2-4eed-8240-229020f1c438.png" 
                alt="Stripe payment APIs" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Task progress section - now collapsible */}
        <Collapsible
          open={isTaskProgressExpanded}
          onOpenChange={setIsTaskProgressExpanded}
          className="bg-[#1D1D1D]"
        >
          <div className="p-4 flex items-center justify-between bg-[#1D1D1D] border-t border-[#363537]">
            <h3 className="text-[#D9D9D9] text-[15px] font-medium">Task progress</h3>
            
            <div className="flex items-center">
              {/* Showing metrics similar to TaskProgress */}
              <UsageMetrics timeSpent={timeSpent} apiCost={apiCost} />
              
              <span className="text-[#9E9E9E] text-xs mr-3">{currentProgress}</span>
              
              <CollapsibleTrigger asChild>
                <IconButton 
                  icon={isTaskProgressExpanded ? 
                    <ChevronDown className="w-4 h-4 text-[#ACACAC]" /> : 
                    <ChevronUp className="w-4 h-4 text-[#ACACAC]" />
                  }
                  onClick={() => setIsTaskProgressExpanded(!isTaskProgressExpanded)}
                  className="bg-transparent hover:bg-[#1A1A1B]"
                  aria-label={isTaskProgressExpanded ? "Collapse task progress" : "Expand task progress"} 
                />
              </CollapsibleTrigger>
            </div>
          </div>
          
          <CollapsibleContent>
            <div className="p-4 pt-0">
              {/* Task list */}
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
      </div>
    </div>
  );
};
