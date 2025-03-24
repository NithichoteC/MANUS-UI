import React, { useState } from "react";
import { ChevronDown, Clock, MonitorSmartphone } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-[644px] rounded-[20px] overflow-hidden bg-[#272728] border border-[#363537] mb-4 max-md:w-[500px] max-sm:w-[90%]">
      {/* Header section */}
      <div className="flex items-center justify-between p-4 h-[60px] bg-[#272728]">
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-[42px] h-[42px] rounded-md bg-[#1D1D1D] flex items-center justify-center">
              <MonitorSmartphone className="w-5 h-5 text-[#6A6A6A]" />
            </div>
          </div>
          <div>
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
          </div>
        </div>
        <div className="flex items-center">
          <IconButton 
            icon={<MonitorSmartphone className="w-4 h-4 text-[#ACACAC]" />} 
            className="mr-2 bg-transparent hover:bg-[#1A1A1B]"
            aria-label="View screen" 
          />
          <IconButton 
            icon={<ChevronDown className={`w-4 h-4 text-[#ACACAC] transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />} 
            onClick={toggleExpand}
            className="bg-transparent hover:bg-[#1A1A1B]"
            aria-label="Toggle expand" 
          />
        </div>
      </div>

      {/* Task progress section */}
      {isExpanded && (
        <div className="bg-[#1D1D1D] p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#D9D9D9] text-[15px] font-medium">Task progress</h3>
            <span className="text-[#9E9E9E] text-xs">1 / 5</span>
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
      )}
    </div>
  );
};
