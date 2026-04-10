import { cn } from "../../utils/cn";
import { Button } from "./Button";

interface TabItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const TabItem = ({ icon, label, isActive, onClick }: TabItemProps) => {
  return (
    <Button
      variant="ghost"
      leftIcon={icon}
      onClick={onClick}
      className={cn(
        "gap-2.5 px-4 py-2 text-sm font-medium transition-all duration-200",
        isActive 
          ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50" 
          : "text-slate-500 hover:text-slate-700"
      )}
    >
      {label}
    </Button>
  );
};