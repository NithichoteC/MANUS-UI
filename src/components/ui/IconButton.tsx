
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
        "flex items-center justify-center p-1",
        variant === "circle" && "w-[37px] h-[37px] rounded-full",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
};
