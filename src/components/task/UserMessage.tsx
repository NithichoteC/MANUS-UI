
import React from "react";

interface UserMessageProps {
  message: string;
}

export const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-end mb-4">
      <div className="bg-[#363537] text-[#D9D9D9] rounded-[20px] py-4 px-6 max-w-[85%]">
        <p className="text-[15px]">{message}</p>
      </div>
    </div>
  );
};
