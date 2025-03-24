
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Maximize2, Minimize2, Monitor, Play, Rewind, SkipBack } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { TaskItem } from "./TaskItem";

interface TaskItemType {
  id: string;
  title: string;
  status?: string;
}

interface ComputerScreenViewProps {
  taskList: TaskItemType[];
  currentTask: TaskItemType;
}

export const ComputerScreenView: React.FC<ComputerScreenViewProps> = ({ 
  taskList, 
  currentTask 
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLive, setIsLive] = useState(true);
  
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const progressText = `${taskList.findIndex(task => task.id === currentTask.id) + 1} / ${taskList.length}`;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
          <Monitor className="w-5 h-5 text-[#ACACAC]" />
        </div>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="p-0 sm:max-w-[750px] w-[90vw] bg-[#272728] border-l border-[#363537]"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5">
            <h2 className="text-[#D9D9D9] text-xl font-medium">Manus's Computer</h2>
            <div className="flex items-center space-x-2">
              <IconButton 
                icon={<Monitor className="w-5 h-5 text-[#ACACAC]" />} 
                className="bg-transparent hover:bg-[#1A1A1B]"
                aria-label="Toggle view"
              />
              <IconButton 
                icon={isFullScreen ? <Minimize2 className="w-5 h-5 text-[#ACACAC]" /> : <Maximize2 className="w-5 h-5 text-[#ACACAC]" />} 
                className="bg-transparent hover:bg-[#1A1A1B]"
                onClick={toggleFullScreen}
                aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
              />
            </div>
          </div>

          {/* Browser Info */}
          <div className="px-5 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-[50px] h-[50px] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#2C2C2C] flex items-center justify-center">
                  <span className="text-[#9E9E9E] text-lg">⌘</span>
                </div>
              </div>
              <div>
                <p className="text-[#9E9E9E] text-sm">Manus is using <span className="text-[#D9D9D9]">Browser</span></p>
                <div className="flex items-center mt-1">
                  <span className="text-[#9E9E9E] text-sm mr-2">Browsing</span>
                  <span className="text-[#666666] text-sm bg-[#1D1D1D] px-2 py-1 rounded">https://stripe.com/resources/more/payment-application-program-inte...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Browser Content */}
          <div className="px-5 flex-1 overflow-y-auto">
            <div className="rounded-lg overflow-hidden bg-[#1D1D1D] h-full flex flex-col">
              <div className="bg-[#1A1A1A] p-3 text-center border-b border-[#333333]">
                <p className="text-[#9E9E9E] text-sm truncate">https://stripe.com/resources/more/...</p>
              </div>
              <div className="flex-1 overflow-hidden">
                <img 
                  src="/lovable-uploads/b50b3b37-6271-4138-bd5c-2a9c8f684de8.png" 
                  alt="Stripe Payment API page" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 flex justify-between items-center bg-[#1A1A1A] border-t border-[#333333]">
                <div className="flex space-x-3">
                  <IconButton 
                    icon={<SkipBack className="w-4 h-4 text-[#ACACAC]" />} 
                    className="bg-transparent hover:bg-[#2C2C2C]"
                    aria-label="Skip back"
                  />
                  <IconButton 
                    icon={<Play className="w-4 h-4 text-[#ACACAC]" />} 
                    className="bg-transparent hover:bg-[#2C2C2C]"
                    aria-label="Play"
                  />
                </div>
                
                <div className="flex-1 mx-4">
                  <div className="h-1 bg-[#333333] rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-4/5 bg-[#3B82F6] rounded-full"></div>
                    <div className="absolute top-0 left-4/5 h-4 w-4 bg-[#3B82F6] rounded-full -mt-1.5 -ml-2 cursor-pointer"></div>
                  </div>
                </div>
                
                <div className="flex items-center text-[#9E9E9E] text-xs space-x-2">
                  <span>live</span>
                  <div className={cn(
                    "h-3 w-3 rounded-full", 
                    isLive ? "bg-[#3B82F6]" : "bg-[#4B5563]"
                  )}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Task Status */}
          <div className="bg-[#1D1D1D] p-5 mt-3 border-t border-[#363537]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] mr-2">
                  <span className="text-white text-sm">✕</span>
                </div>
                <h3 className="text-[#D9D9D9] text-[15px] font-medium">{currentTask.title}</h3>
              </div>
              <div className="flex items-center text-[#9E9E9E] text-xs">
                <span className="mr-2">{progressText}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[#9E9E9E] text-sm">Manus has stopped</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
