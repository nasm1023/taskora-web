import { CalendarIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";

interface MilestoneProps {
  title: string;
  due: string;
  colorClass: string;
}

export const MilestoneItem = ({ title, due, colorClass }: MilestoneProps) => (
  <div className="flex gap-3 items-center py-2">
    <div className={cn("p-2.5 rounded-3xl shrink-0", colorClass)}>
      <CalendarIcon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <span className="text-xs text-slate-400">{due}</span>
    </div>
  </div>
);