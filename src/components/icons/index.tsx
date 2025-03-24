
import React from "react";
import { Plus, Book, X, Search as LucideSearch, Settings as LucideSettings, Paperclip, Send } from "lucide-react";

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
  <Paperclip className="w-5 h-5 text-[#ACACAC]" strokeWidth={1.5} />
);

export const SendIcon: React.FC = () => (
  <Send className="w-5 h-5 text-[#ACACAC]" strokeWidth={1.5} />
);

export const PlusIcon: React.FC = () => (
  <Plus className="w-[11px] h-[11px] text-[#D9D9D9]" strokeWidth={3} />
);
