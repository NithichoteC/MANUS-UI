
import React from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "default" | "circle";
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center w-[37px] h-[37px] hover:bg-[#1A1A1B] transition-colors text-[#ACACAC]",
        variant === "circle" && "rounded-full",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-full h-full">
        {icon}
      </div>
    </button>
  );
};
