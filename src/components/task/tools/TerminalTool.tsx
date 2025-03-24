
import React from "react";

export const TerminalTool: React.FC = () => {
  return (
    <>
      <div className="p-4 bg-[#272728] flex items-center">
        <div className="w-[42px] h-[42px] rounded-md bg-[#1D1D1D] flex items-center justify-center mr-4">
          <span className="text-[#6A6A6A]">✎</span>
        </div>
        <div>
          <div className="text-[#9E9E9E] text-[13px]">I am using Terminal</div>
          <div className="flex items-center text-[#9E9E9E] text-[13px] mt-1">
            <span>Creating file</span>
            <span className="ml-2 font-mono text-[12px] text-[#6A6A6A]">research/business_opportunities.md</span>
          </div>
        </div>
      </div>
      
      {/* Terminal/Editor content - filling the entire area */}
      <div className="flex-1 bg-[#1D1D1D] overflow-y-auto">
        <div className="p-4 h-full">
          <div className="w-full h-10 flex items-center justify-center bg-[#272728] rounded-t-md">
            <span className="text-[#9E9E9E] text-xs">business_opportunities.md</span>
          </div>
          <div className="bg-[#1a1a1a] w-full h-[calc(100%-40px)] overflow-y-auto p-4 font-mono text-sm">
            <div className="text-[#C792EA] mb-2"># Top Subscription Business Opportunities</div>
            
            <div className="text-[#D9D9D9] mb-4">
              Based on comprehensive research of subscription business models and market trends, here are the most promising subscription business opportunities that can be built with backend agent integration and APIs.
            </div>
            
            <div className="text-[#C792EA] mb-2">## 1. AI-Powered Subscription Churn Prediction and Prevention</div>
            
            <div className="text-[#82AAFF] mb-1">**Business Model:**</div>
            <div className="text-[#D9D9D9] mb-2">
              - Subscription service that integrates with existing subscription businesses<br />
              - Uses AI to analyze customer behavior patterns and predict potential churn<br />
              - Automatically implements retention strategies before customers cancel
            </div>
            
            <div className="text-[#82AAFF] mb-1">**Key Features:**</div>
            <div className="text-[#D9D9D9] mb-2">
              - Real-time churn risk scoring<br />
              - Automated personalized retention offers<br />
              - Pause subscription recommendations<br />
              - Customer sentiment analysis<br />
              - Integration with major subscription management platforms
            </div>
            
            <div className="text-[#82AAFF] mb-1">**Market Potential:**</div>
            <div className="text-[#D9D9D9]">
              - Addresses the critical issue of increasing acquisition rates<br />
              - Average churn for subscription businesses is 5-7% monthly
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
