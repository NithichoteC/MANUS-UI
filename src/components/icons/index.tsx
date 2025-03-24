
import React from "react";
import { Plus, Book, X, Search as LucideSearch, Settings as LucideSettings } from "lucide-react";

export const MenuIcon: React.FC = () => (
  <div className="flex w-[21px] h-5 items-center gap-2.5 px-2 py-px rounded-sm border-2 border-[#676767] cursor-pointer hover:border-[#888888] transition-colors">
    <div className="w-0.5 h-[17px] bg-[#676767]" />
  </div>
);

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <LucideSearch className={`text-[#ACACAC] ${props.className || ""}`} strokeWidth={1.5} />
);

export const BookIcon: React.FC = () => (
  <Book className="w-6 h-6 text-[#ACACAC]" strokeWidth={1.5} />
);

export const SettingsIcon: React.FC = () => (
  <LucideSettings className="w-6 h-6 text-[#ACACAC]" strokeWidth={1.5} />
);

export const AttachmentIcon: React.FC = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#ACACAC]"
  >
    <path
      d="M18 9.45019L9.96277 17.4874C8.97819 18.4721 7.64275 19.0252 6.25029 19.0252C4.85782 19.0252 3.52239 18.4721 2.53778 17.4874C1.55315 16.5028 1 15.1674 1 13.7749C1 12.3824 1.55315 11.0471 2.53778 10.0624L10.575 2.02518C11.2314 1.36877 12.1217 1 13.05 1C13.9783 1 14.8686 1.36877 15.525 2.02518C16.1814 2.6816 16.5502 3.57189 16.5502 4.50019C16.5502 5.4285 16.1814 6.31879 15.525 6.9752L7.47905 15.0124C7.15085 15.3406 6.7057 15.525 6.24155 15.525C5.77739 15.525 5.33225 15.3406 5.00404 15.0124C4.67584 14.6842 4.49144 14.2391 4.49144 13.7749C4.49144 13.3108 4.67584 12.8656 5.00404 12.5374L12.429 5.12113"
      stroke="#ACACAC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SendIcon: React.FC = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 17 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#ACACAC]"
  >
    <path
      d="M0.319717 8.85668C0.421155 8.97904 0.545735 9.08017 0.686321 9.15431C0.826907 9.22844 0.980738 9.27411 1.139 9.2887C1.29726 9.3033 1.45685 9.28652 1.60862 9.23934C1.76039 9.19216 1.90137 9.11551 2.02347 9.01376L7.2918 4.62751V18.9583C7.2918 19.2788 7.41911 19.5862 7.64571 19.8128C7.87232 20.0394 8.17966 20.1667 8.50013 20.1667C8.8206 20.1667 9.12795 20.0394 9.35455 19.8128C9.58116 19.5862 9.70847 19.2788 9.70847 18.9583V4.62751L14.9768 9.01376C15.099 9.11532 15.24 9.19181 15.3917 9.23888C15.5435 9.28595 15.703 9.30267 15.8612 9.28808C16.0194 9.27349 16.1732 9.22789 16.3138 9.15387C16.4544 9.07985 16.579 8.97887 16.6806 8.85668C16.7821 8.7345 16.8586 8.59351 16.9057 8.44176C16.9527 8.29001 16.9695 8.13048 16.9549 7.97227C16.9403 7.81406 16.8947 7.66028 16.8207 7.5197C16.7466 7.37911 16.6457 7.25449 16.5235 7.15293L9.27347 1.11126L9.09222 1.00251L8.93513 0.91793C8.65519 0.809909 8.34507 0.809909 8.06513 0.91793L7.90805 1.00251L7.7268 1.11126L0.4768 7.15293C0.354446 7.25437 0.253306 7.37895 0.179172 7.51954C0.105038 7.66012 0.0593678 7.81395 0.0447762 7.97222C0.0301845 8.13048 0.0469586 8.29007 0.0941373 8.44184C0.141316 8.59361 0.217973 8.73458 0.319717 8.85668Z"
      fill="#ACACAC"
    />
  </svg>
);

export const PlusIcon: React.FC = () => (
  <Plus className="w-[11px] h-[11px] text-[#D9D9D9]" strokeWidth={3} />
);
