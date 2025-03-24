import React from "react";

export const BrowserTool: React.FC = () => {
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
};
