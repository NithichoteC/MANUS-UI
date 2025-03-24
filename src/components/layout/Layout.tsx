
import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { TaskInput } from "@/components/task/TaskInput";
import { TaskProgress } from "@/components/task/TaskProgress";
import { UserMessage } from "@/components/task/UserMessage";
import { ComputerScreenView } from "@/components/task/ComputerScreenView";

export const Layout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [isComputerScreenOpen, setIsComputerScreenOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAddMessage = (message: string) => {
    setMessages(prev => [...prev, message]);
  };

  const handleToggleComputerScreen = (open: boolean) => {
    setIsComputerScreenOpen(open);
  };

  // List of tasks that is shared between TaskProgress and ComputerScreenView
  const taskList = [
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
      status: "I have stopped",
      isCompleted: false
    },
    {
      id: "5",
      title: "Suggest alternative assistance for AI development exploration",
      status: "pending",
      isCompleted: false
    }
  ];

  return (
    <div className="flex h-screen w-screen bg-[#272728]">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main 
        className={`flex-1 flex flex-col h-full overflow-hidden transition-all duration-300 
        ${isComputerScreenOpen ? 'ml-[-175px]' : ''}`}
      >
        <div className="flex-1 flex flex-col overflow-y-auto p-4">
          <div className="w-full max-w-[900px] mx-auto flex-1 flex flex-col pt-6 transition-all duration-300">
            {messages.map((message, index) => (
              <UserMessage key={index} message={message} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 pb-[22px] transition-all duration-300">
          {!isComputerScreenOpen && <TaskProgress 
            onComputerScreenToggle={handleToggleComputerScreen}
            isComputerScreenOpen={isComputerScreenOpen}
            taskList={taskList}
            currentTaskId="1"
          />}
          <TaskInput onSendMessage={handleAddMessage} />
        </div>
      </main>
      <ComputerScreenView 
        open={isComputerScreenOpen}
        onOpenChange={handleToggleComputerScreen}
        taskList={taskList}
        currentTaskId="4"
      />
    </div>
  );
};
