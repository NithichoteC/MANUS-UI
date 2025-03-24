
import React from "react";
import { Clock, DollarSign } from "lucide-react";

interface UsageMetricsProps {
  timeSpent: string;
  apiCost: string;
}

export const UsageMetrics: React.FC<UsageMetricsProps> = ({ timeSpent, apiCost }) => {
  return (
    <>
      {/* Time spent */}
      <div className="flex items-center mr-3 text-[#9E9E9E] text-xs">
        <Clock className="w-3 h-3 mr-1" />
        <span>{timeSpent}</span>
      </div>
      
      {/* API cost */}
      <div className="flex items-center mr-3 text-[#9E9E9E] text-xs">
        <DollarSign className="w-3 h-3 mr-1" />
        <span>{apiCost}</span>
      </div>
    </>
  );
};
