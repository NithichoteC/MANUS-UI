
import React from "react";

interface DeviceInfoProps {
  name: string;
  application: string;
}

export const DeviceInfo: React.FC<DeviceInfoProps> = ({ name, application }) => {
  return (
    <div>
      <span className="text-[#D9D9D9] text-[17px]">{name}'s computer</span>
      <div className="flex items-center mt-1">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-md bg-[#2C2C2C] flex items-center justify-center mr-2">
            <span className="text-[#9E9E9E] text-[12px]">⌘</span>
          </div>
          <span className="text-[#9E9E9E] text-[12px]">{name} is using</span>
          <span className="text-[#D9D9D9] text-[12px] ml-1">{application}</span>
        </div>
      </div>
    </div>
  );
};
