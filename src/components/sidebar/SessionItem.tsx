
import React from "react";

export interface SessionData {
  id: number;
  title: string;
  subtitle: string;
  days: number;
  avatarType: "user" | "ai";
}

interface SessionItemProps {
  session: SessionData;
}

export const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
  return (
    <div 
      className="w-full h-auto min-h-[72px] bg-[#212122] hover:bg-[#161618] rounded-[10px] transition-colors cursor-pointer p-2"
    >
      <div className="flex gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          session.avatarType === "user" ? "bg-[#4e4e4f]" : "bg-[#363537]"
        }`}>
          {session.avatarType === "user" ? (
            <span className="text-white text-xs">👤</span>
          ) : (
            <span className="text-white text-xs">🤖</span>
          )}
        </div>
        <div className="flex flex-col overflow-hidden flex-grow">
          <div className="flex justify-between items-center">
            <span className="text-neutral-300 font-medium text-sm truncate max-w-[200px]">
              {session.title}
            </span>
            <span className="text-neutral-500 text-xs whitespace-nowrap ml-2">
              {session.days} days ago
            </span>
          </div>
          <p className="text-neutral-500 text-xs mt-1 truncate">
            {session.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
