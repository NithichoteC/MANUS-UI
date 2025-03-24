
import React, { useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { AttachmentIcon, SendIcon } from "@/components/icons";
import { UserMessage } from "@/components/task/UserMessage";

export const TaskInput: React.FC = () => {
  const [task, setTask] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      // Add the task to messages array
      setMessages([...messages, task]);
      setIsMessageSent(true);
      setTask("");
    }
  };

  // Determine if the input has text
  const hasText = task.trim().length > 0;

  return (
    <>
      {isMessageSent && (
        <div className="w-[800px] max-md:w-[600px] max-sm:w-[95%] mb-4">
          {messages.map((message, index) => (
            <UserMessage key={index} message={message} />
          ))}
        </div>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="w-[800px] h-[138px] bg-[#363537] relative rounded-[43px] max-md:w-[600px] max-sm:w-[95%]"
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Give me a task to work on..."
          className="absolute text-[#D9D9D9] text-[15px] left-[30px] top-[23px] bg-transparent border-none outline-none w-[calc(100%-60px)] placeholder:text-[#575757]"
        />

        <div className="absolute left-[30px] bottom-[20px]">
          <IconButton 
            icon={<AttachmentIcon />} 
            variant="circle"
            className="bg-[#363537] border border-[#414142]"
            aria-label="Attach file" 
          />
        </div>

        <div className="absolute right-[30px] bottom-[20px]">
          <IconButton 
            icon={<SendIcon color={hasText ? "#292929" : "#5F5F5F"} />} 
            variant="circle"
            className={`${hasText ? "bg-[#D7D7D7] hover:bg-[#c2c2c2]" : "bg-[#4E4E4F]"} border ${hasText ? "border-[#D7D7D7] hover:border-[#c2c2c2]" : "border-[#4E4E4F]"}`}
            type="submit" 
            aria-label="Send task"
            disabled={!hasText}
            disableHover={!hasText}
          />
        </div>
      </form>
    </>
  );
};
