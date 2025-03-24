
import React from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "default" | "circle";
  className?: string;
  disableHover?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = "default",
  className,
  disableHover = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center w-[37px] h-[37px] transition-colors text-[#ACACAC]",
        !disableHover && "hover:bg-[#1A1A1B]",
        variant === "circle" && "rounded-full overflow-hidden",
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
