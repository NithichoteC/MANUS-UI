
import React from "react";
import { Maximize2 } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const ComputerScreen: React.FC = () => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div className="w-[180px] h-[120px] rounded-md bg-[#1D1D1D] overflow-hidden relative transition-transform duration-200 hover:scale-105 cursor-pointer group">
          <div className="absolute top-0 left-0 w-full h-full p-1.5">
            <div className="w-full h-full rounded-sm relative bg-[#161616] p-2">
              <div className="absolute top-1 left-1.5 flex space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#272727]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#272727]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#272727]"></div>
              </div>
              <div className="mt-2 text-left">
                <div className="text-[6px] text-[#9747FF] font-mono">// implementation_examples.md</div>
                <div className="flex mt-0.5">
                  <div className="text-[6px] text-[#A970FF] font-mono mr-1"># Practical</div>
                  <div className="text-[6px] text-[#64B5F6] font-mono mr-1">Examples</div>
                  <div className="text-[6px] text-white font-mono opacity-50 mr-1">•</div>
                  <div className="text-[6px] text-[#F06292] font-mono mr-1">Patterns</div>
                  <div className="text-[6px] text-white font-mono opacity-50 mr-1">•</div>
                  <div className="text-[6px] text-[#FFD54F] font-mono">Guidelines</div>
                </div>
                <div className="mt-1 text-[5px] text-[#AAAAAA] font-mono leading-tight">
                  Today, we'll implement a more efficient <br />
                  version of the text-input logic. Replacing a <br />
                  series of expensive regex with optimized <br />
                  character-by-character checks. This new <br />
                  approach is 30% faster while maintaining <br />
                  correctness of the previously implemented... 
                </div>
                <div className="mt-3 text-[5px] text-[#AAAAAA] font-mono leading-tight">
                  The implementation involves several key steps:<br />
                  1. Parse input string character by character<br />
                  2. Track state with a simple FSM approach<br />
                  3. Apply validation rules incrementally<br />
                  4. Optimize critical paths for performance<br />
                  5. Add comprehensive test coverage
                </div>
                <div className="mt-1 text-[5px] text-[#777777] font-mono">
                  ■ More knowledge implemented here...
                </div>
              </div>
            </div>
          </div>
          
          {/* Expand icon in the bottom right corner */}
          <div className="absolute bottom-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 size={10} className="text-white" />
          </div>
          
          {/* Black overlay with text that appears on hover */}
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xs font-medium">View Manus's computer</span>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent side="right" className="p-2 w-48 bg-black/90 border-neutral-700 text-white text-xs">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">MANUS Computer</span>
          <span className="text-[11px] text-neutral-300">Access coding files and implementation examples</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
