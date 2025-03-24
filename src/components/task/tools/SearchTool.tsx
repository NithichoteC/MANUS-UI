
import React from "react";

export const SearchTool: React.FC = () => {
  return (
    <>
      <div className="p-4 bg-[#272728] flex items-center">
        <div className="w-[42px] h-[42px] rounded-md bg-[#1D1D1D] flex items-center justify-center mr-4">
          <span className="text-[#6A6A6A]">🔍</span>
        </div>
        <div>
          <div className="text-[#9E9E9E] text-[13px]">I am using Search</div>
          <div className="flex items-center text-[#9E9E9E] text-[13px] mt-1">
            <span>Searching</span>
            <span className="ml-2 font-mono text-[12px] text-[#6A6A6A]">subscription management APIs for churn prediction integration</span>
          </div>
        </div>
      </div>
      
      {/* Search content - filling the entire area */}
      <div className="flex-1 bg-[#1D1D1D] overflow-y-auto">
        <div className="p-4 h-full">
          <div className="w-full h-10 flex items-center justify-center bg-[#272728] rounded-t-md">
            <span className="text-[#9E9E9E] text-xs">Search</span>
          </div>
          <div className="bg-[#1a1a1a] w-full h-[calc(100%-40px)] overflow-y-auto text-[#D9D9D9]">
            {/* Search results list */}
            <div className="border-b border-[#2c2c2c] p-4">
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full bg-[#4285F4] flex items-center justify-center mr-2 text-xs text-white">M</div>
                <span className="font-medium">Predict subscription churn - Dynamics 365 Customer Insights</span>
              </div>
              <p className="text-sm text-[#9E9E9E]">Predict whether a customer is at risk for no longer using your company's subscription products or periodic services.</p>
            </div>
            <div className="border-b border-[#2c2c2c] p-4">
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full bg-[#1E88E5] flex items-center justify-center mr-2 text-xs text-white">S</div>
                <span className="font-medium">Subscription Management API - Salesforce Help</span>
              </div>
              <p className="text-sm text-[#9E9E9E]">Subscription Management API now provides enhanced compatibility with other Salesforce products, including Experience Cloud and quotes.</p>
            </div>
            <div className="border-b border-[#2c2c2c] p-4">
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full bg-[#26A69A] flex items-center justify-center mr-2 text-xs text-white">P</div>
                <span className="font-medium">10+ Top Recurring Billing & Subscription Management Tools - Pabbly</span>
              </div>
              <p className="text-sm text-[#9E9E9E]">Pabbly Subscription is a bracing recurring billing tool to manage all your subscription billing related needs in a simple and affordable way.</p>
            </div>
            <div className="border-b border-[#2c2c2c] p-4">
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FF5722] flex items-center justify-center mr-2 text-xs text-white">W</div>
                <span className="font-medium">13 Top Churn Management Softwares: Features, Pricing - WWO</span>
              </div>
              <p className="text-sm text-[#9E9E9E]">In this blog, we'll explore the 13 best tools to help you predict churn, act proactively, and create experiences your customers won't want to leave behind.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
