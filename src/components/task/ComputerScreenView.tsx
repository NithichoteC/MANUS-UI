
import React from "react";
import { X, Maximize2, Minimize2, SkipBack, SkipForward, PlayCircle } from "lucide-react";
import { TaskItem } from "./TaskItem";
import { IconButton } from "@/components/ui/IconButton";

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
  const currentProgress = `${taskList.findIndex(task => task.id === currentTaskId) + 1} / ${taskList.length}`;

  if (!open) return null;

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-[450px] md:w-[550px] lg:w-[620px] bg-[#1A1A1A] border-l border-[#363537] z-50 transition-transform duration-300 
      ${open ? 'translate-x-0' : 'translate-x-full'} overflow-hidden flex flex-col`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 flex items-center justify-between bg-[#272728] border-b border-[#363537]">
          <h2 className="text-[#D9D9D9] text-[17px]">Manus's Computer</h2>
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
            <div className="text-[#9E9E9E] text-[13px]">Manus is using Browser</div>
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
                src="/lovable-uploads/4033cade-7145-4047-8969-1c8d8eb74d1c.png" 
                alt="Stripe payment APIs" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Player controls */}
        <div className="p-4 flex items-center justify-between bg-[#272728] border-t border-[#363537]">
          <div className="flex items-center space-x-2">
            <SkipBack className="w-5 h-5 text-[#6A6A6A]" />
            <PlayCircle className="w-6 h-6 text-[#6A6A6A]" />
            <SkipForward className="w-5 h-5 text-[#6A6A6A]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="w-full bg-[#363537] h-1 rounded-full overflow-hidden">
              <div className="bg-[#6A6A6A] h-full w-3/4 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[#9E9E9E] text-xs">live</span>
          </div>
        </div>
        
        {/* Task progress section */}
        <div className="bg-[#1D1D1D] p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#D9D9D9] text-[15px] font-medium">Task progress</h3>
            <span className="text-[#9E9E9E] text-xs">{currentProgress}</span>
          </div>
          
          {/* Task list */}
          {taskList.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              status={task.status}
              isActive={task.id === currentTaskId}
              isCompleted={task.isCompleted}
            />
          ))}
        </div>
      </div>
      
      {/* Overlay to capture clicks outside the panel */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => onOpenChange(false)}
      />
    </div>
  );
};
