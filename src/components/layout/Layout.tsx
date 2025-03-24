
import React, { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { TaskInput } from "@/components/task/TaskInput";
import { TaskProgress } from "@/components/task/TaskProgress";

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
        <div className="w-full flex justify-center pt-4">
          <TaskProgress />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto p-4">
          <div className="w-full max-w-[800px] mx-auto flex-1 flex flex-col">
            {messages.map((message, index) => (
              <div key={index} className="flex justify-end mb-4">
                <div className="bg-[#363537] text-[#D9D9D9] rounded-[20px] py-4 px-6 max-w-[85%]">
                  <p className="text-[15px]">{message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center pb-[22px]">
          <TaskInput onSendMessage={handleAddMessage} />
        </div>
      </main>
    </div>
  );
};
