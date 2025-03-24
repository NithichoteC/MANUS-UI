import React, { useState } from "react";
import { Minimize2, ChevronDown, ChevronUp } from "lucide-react";
import { TaskItem } from "./TaskItem";
import { IconButton } from "@/components/ui/IconButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { UsageMetrics } from "./UsageMetrics";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Type definition for tools
type ToolType = "browser" | "search" | "terminal" | "calculator";

interface ComputerScreenViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskList: Array<{
    id: string;
    title: string;
    status?: string;
    isCompleted?: boolean;
  }>;
  currentTaskId: string;
}

export const ComputerScreenView: React.FC<ComputerScreenViewProps> = ({
  open,
  onOpenChange,
  taskList,
  currentTaskId
}) => {
  const [isTaskProgressExpanded, setIsTaskProgressExpanded] = useState(true);
  const [activeTool, setActiveTool] = useState<ToolType>("browser");
  
  const currentTask = taskList.find(task => task.id === currentTaskId);
  const currentProgress = `${taskList.findIndex(task => task.id === currentTaskId) + 1} / ${taskList.length}`;
  
  // Same metrics as in TaskProgress
  const timeSpent = "12m 34s";
  const apiCost = "0.42";

  if (!open) return null;

  // Determine tool-specific content
  const renderToolContent = () => {
    switch (activeTool) {
      case "browser":
        return (
          <>
            <div className="p-4 bg-[#272728] flex items-center">
              <div className="w-[42px] h-[42px] rounded-md bg-[#1D1D1D] flex items-center justify-center mr-4">
                <span className="text-[#6A6A6A]">⌘</span>
              </div>
              <div>
                <div className="text-[#9E9E9E] text-[13px]">I am using Browser</div>
                <div className="flex items-center text-[#9E9E9E] text-[13px] mt-1">
                  <span>Browsing</span>
                  <span className="ml-2 font-mono text-[12px] text-[#6A6A6A]">https://stripe.com/resources/more/payment-application-program-inte...</span>
                </div>
              </div>
            </div>
            
            {/* Browser content - keeping the same dimensions */}
            <div className="flex-1 bg-[#1D1D1D] overflow-y-auto">
              <div className="p-4">
                <div className="w-full h-10 flex items-center justify-center bg-[#272728] rounded-t-md">
                  <span className="text-[#9E9E9E] text-xs">https://stripe.com/resources/more/...</span>
                </div>
                <div className="bg-white w-full h-[400px] p-4 overflow-y-auto">
                  <img 
                    src="/lovable-uploads/5fcfaec2-0aa2-4eed-8240-229020f1c438.png" 
                    alt="Stripe payment APIs" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </>
        );
        
      case "search":
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

      case "terminal":
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

      case "calculator":
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

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex justify-end z-20 pt-6 pr-6 pb-[22px] pointer-events-none">
      <div 
        className="w-[450px] md:w-[550px] lg:w-[700px] bg-[#272728] border border-[#363537] 
        rounded-[20px] overflow-hidden flex flex-col animate-slide-in-right pointer-events-auto"
        style={{
          boxShadow: "-4px 0px 15px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header with Tool Selector */}
          <div className="p-4 flex items-center justify-between bg-[#272728] border-b border-[#363537]">
            <div className="flex items-center space-x-4">
              <h2 className="text-[#D9D9D9] text-[17px] font-bold">Computer screen</h2>
              
              {/* Tool selector - development only */}
              <ToggleGroup type="single" value={activeTool} onValueChange={(value) => value && setActiveTool(value as ToolType)} size="sm">
                <ToggleGroupItem value="browser" className="text-xs px-2 py-1 h-7">Browser</ToggleGroupItem>
                <ToggleGroupItem value="search" className="text-xs px-2 py-1 h-7">Search</ToggleGroupItem>
                <ToggleGroupItem value="terminal" className="text-xs px-2 py-1 h-7">Terminal</ToggleGroupItem>
                <ToggleGroupItem value="calculator" className="text-xs px-2 py-1 h-7">Calculator</ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="flex items-center">
              <IconButton 
                icon={<Minimize2 className="w-4 h-4 text-[#6A6A6A]" />} 
                className="bg-transparent hover:bg-[#1A1A1B]"
                aria-label="Minimize"
                onClick={() => onOpenChange(false)}
              />
            </div>
          </div>
          
          {/* Tool-specific content */}
          {renderToolContent()}
          
          {/* Task progress section - collapsible */}
          <Collapsible
            open={isTaskProgressExpanded}
            onOpenChange={setIsTaskProgressExpanded}
            className="bg-[#1D1D1D]"
          >
            <div className="p-4 flex items-center justify-between bg-[#1D1D1D] border-t border-[#363537]">
              <h3 className="text-[#D9D9D9] text-[15px] font-medium">Task progress</h3>
              
              <div className="flex items-center">
                {/* Showing metrics similar to TaskProgress */}
                <UsageMetrics timeSpent={timeSpent} apiCost={apiCost} />
                
                <span className="text-[#9E9E9E] text-xs mr-3">{currentProgress}</span>
                
                <CollapsibleTrigger asChild>
                  <IconButton 
                    icon={isTaskProgressExpanded ? 
                      <ChevronDown className="w-4 h-4 text-[#ACACAC]" /> : 
                      <ChevronUp className="w-4 h-4 text-[#ACACAC]" />
                    }
                    onClick={() => setIsTaskProgressExpanded(!isTaskProgressExpanded)}
                    className="bg-transparent hover:bg-[#1A1A1B]"
                    aria-label={isTaskProgressExpanded ? "Collapse task progress" : "Expand task progress"} 
                  />
                </CollapsibleTrigger>
              </div>
            </div>
            
            <CollapsibleContent>
              <div className="p-4 pt-0">
                {/* Task list */}
                {taskList.map((task) => (
                  <TaskItem
                    key={task.id}
                    title={task.title}
                    status={task.id === currentTaskId ? task.status : undefined}
                    isActive={task.id === currentTaskId}
                    isCompleted={task.isCompleted}
                  />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};
