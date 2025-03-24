
import React, { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { TaskInput } from "@/components/task/TaskInput";
import { TaskProgress } from "@/components/task/TaskProgress";

export const Layout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen w-screen bg-[#272728]">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main className="flex-1 flex flex-col items-center justify-end pb-[22px] transition-all duration-300 ease-in-out">
        <TaskProgress />
        <TaskInput />
      </main>
    </div>
  );
};
