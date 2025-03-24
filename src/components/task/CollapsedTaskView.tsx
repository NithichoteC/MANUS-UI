
import React from "react";
import { MonitorSmartphone } from "lucide-react";

interface CollapsedTaskViewProps {
  title: string;
  status: string;
}

export const CollapsedTaskView: React.FC<CollapsedTaskViewProps> = ({ title, status }) => {
  return (
    <div className="flex items-center">
      <div className="w-[42px] h-[42px] rounded-md bg-[#1D1D1D] flex items-center justify-center mr-3">
        <MonitorSmartphone className="w-5 h-5 text-[#6A6A6A]" />
      </div>
      <div>
        <p className="text-[#D9D9D9] text-[15px]">{title}</p>
        <p className="text-[#9E9E9E] text-[13px]">{status}</p>
      </div>
    </div>
  );
};
