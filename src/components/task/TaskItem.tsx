
import React from "react";
import { Clock, CheckCircle } from "lucide-react";

interface TaskItemProps {
  title: string;
  status?: string;
  isActive?: boolean;
  isCompleted?: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({ 
  title, 
  status, 
  isActive = false,
  isCompleted = false
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {isActive ? (
            <div className="w-5 h-5 rounded-full border border-[#FFC700] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFC700]"></div>
            </div>
          ) : isCompleted ? (
            <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
          ) : (
            <Clock className="w-5 h-5 text-[#5A5A5A]" />
          )}
        </div>
        <div>
          <p className={isActive ? "text-[#D9D9D9] text-[15px]" : "text-[#9E9E9E] text-[15px]"}>
            {title}
          </p>
          {status && isActive && (
            <p className="text-[#9E9E9E] text-[13px]">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};
