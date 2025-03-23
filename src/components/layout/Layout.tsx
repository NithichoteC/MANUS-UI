import React from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { TaskInput } from "@/components/task/TaskInput";

export const Layout: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-[#272728]">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-end pb-[22px]">
        <TaskInput />
      </main>
    </div>
  );
};
