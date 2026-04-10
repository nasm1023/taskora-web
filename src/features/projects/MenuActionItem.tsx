import { MenuItem } from "@headlessui/react";
import { Button } from "../../components/ui/Button";
import { cn } from "../../utils/cn";

interface MenuActionItemProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

export const MenuActionItem = ({ 
  icon: Icon, 
  label, 
  onClick, 
  variant = 'default',
}: MenuActionItemProps) => (
  <MenuItem>
    {({ focus }) => (
      <Button
        variant="ghost"
        fullWidth
        onClick={onClick}
        className={cn(
          "justify-start font-medium px-3 py-2 text-sm",
          focus ? "bg-slate-50" : "",
          variant === 'danger' 
            ? "text-red-600 hover:text-red-700 hover:bg-red-50" 
            : "text-slate-600"
        )}
        leftIcon={Icon}
      >
        <span className={variant === 'danger' ? "text-red-600" : "text-slate-700"}>
          {label}
        </span>
      </Button>
    )}
  </MenuItem>
);