
import React, { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { TaskInput } from "@/components/task/TaskInput";
import { TaskProgress } from "@/components/task/TaskProgress";
import { UserMessage } from "@/components/task/UserMessage";

export const Layout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAddMessage = (message: string) => {
    setMessages(prev => [...prev, message]);
  };

  return (
    <div className="flex h-screen w-screen bg-[#272728]">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 flex flex-col overflow-y-auto p-4">
          <div className="w-full max-w-[800px] mx-auto flex-1 flex flex-col">
            {messages.map((message, index) => (
              <UserMessage key={index} message={message} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 pb-[22px]">
          <TaskProgress />
          <TaskInput onSendMessage={handleAddMessage} />
        </div>
      </main>
    </div>
  );
};
