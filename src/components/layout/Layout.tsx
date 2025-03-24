
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
      <main className="flex-1 flex flex-col h-full overflow-hidden transition-all duration-300">
        <div className="flex-1 flex flex-col overflow-y-auto p-4">
          <div className="w-full max-w-[900px] mx-auto flex-1 flex flex-col pt-6 transition-all duration-300">
            {messages.map((message, index) => (
              <UserMessage key={index} message={message} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 pb-[22px] transition-all duration-300">
          <TaskProgress />
          <TaskInput onSendMessage={handleAddMessage} />
        </div>
      </main>
    </div>
  );
};
