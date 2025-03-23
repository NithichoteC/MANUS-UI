import React, { useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { AttachmentIcon, SendIcon } from "@/components/icons";

export const TaskInput: React.FC = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      // Handle task creation
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[644px] h-[138px] bg-[#363537] relative rounded-[43px] max-md:w-[500px] max-sm:w-[90%]"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Give me a task to work on..."
        className="absolute text-[#5F5F5F] text-[15px] left-[30px] top-[23px] bg-transparent border-none outline-none w-[calc(100%-60px)]"
      />

      <div className="absolute flex items-center gap-2.5 left-[30px] bottom-5">
        <IconButton
          icon={
            <div className="w-[37px] h-[37px] rounded-full bg-[#363537] border border-[#414142]" />
          }
          variant="circle"
          aria-label="Avatar"
        />
        <IconButton icon={<AttachmentIcon />} aria-label="Attach file" />
      </div>

      <div className="absolute flex items-center gap-2.5 right-[30px] bottom-5">
        <IconButton
          icon={<div className="w-[37px] h-[37px] rounded-full bg-[#4E4E4F]" />}
          variant="circle"
          aria-label="Action"
        />
        <IconButton icon={<SendIcon />} type="submit" aria-label="Send task" />
      </div>
    </form>
  );
};
