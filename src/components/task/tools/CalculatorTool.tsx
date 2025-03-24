
import React from "react";

export const CalculatorTool: React.FC = () => {
  return (
    <>
      <div className="p-4 bg-[#272728] flex items-center">
        <div className="w-[42px] h-[42px] rounded-md bg-[#1D1D1D] flex items-center justify-center mr-4">
          <span className="text-[#6A6A6A]">🔢</span>
        </div>
        <div>
          <div className="text-[#9E9E9E] text-[13px]">I am using Calculator</div>
          <div className="flex items-center text-[#9E9E9E] text-[13px] mt-1">
            <span>Calculating</span>
            <span className="ml-2 font-mono text-[12px] text-[#6A6A6A]">subscription revenue projections</span>
          </div>
        </div>
      </div>
      
      {/* Calculator content - simplified and filling the entire area */}
      <div className="flex-1 bg-[#1D1D1D] overflow-y-auto">
        <div className="p-4 h-full">
          <div className="w-full h-10 flex items-center justify-center bg-[#272728] rounded-t-md">
            <span className="text-[#9E9E9E] text-xs">Calculator</span>
          </div>
          <div className="bg-[#1a1a1a] w-full h-[calc(100%-40px)] overflow-y-auto p-4">
            {/* Formula section */}
            <div className="bg-[#272728] p-4 rounded-md mb-4">
              <div className="text-[#9E9E9E] text-xs mb-1">Formula</div>
              <div className="text-[#D9D9D9] font-mono">
                MRR = customers × avg_revenue<br />
                MRR = 629 × $20.00
              </div>
            </div>
            
            {/* Calculation section */}
            <div className="bg-[#272728] p-4 rounded-md mb-4">
              <div className="text-[#9E9E9E] text-xs mb-1">Calculation</div>
              <div className="text-[#D9D9D9] font-mono">
                629 × $20.00 = $12,580.00<br />
                Annual: $12,580.00 × 12 = $150,960.00<br />
                After churn (5.2%): $150,960.00 × 0.948 = $143,110.08
              </div>
            </div>
            
            {/* Result section */}
            <div className="bg-[#272728] p-4 rounded-md">
              <div className="text-[#9E9E9E] text-xs mb-1">Result</div>
              <div className="text-right text-[#D9D9D9] text-xl font-bold">$12,580.00</div>
              <div className="text-right text-[#9E9E9E] text-xs">Monthly Recurring Revenue</div>
              <div className="mt-2 text-right text-[#D9D9D9] text-lg font-medium">$143,110.08</div>
              <div className="text-right text-[#9E9E9E] text-xs">Projected Annual Revenue (After Churn)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
