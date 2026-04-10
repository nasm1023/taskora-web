import React, { type ButtonHTMLAttributes, type ElementType } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  isLoading?: boolean;   
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', leftIcon: LeftIcon, rightIcon: RightIcon, isLoading, fullWidth, children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
      outline: 'border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-600',
      ghost: 'bg-transparent text-slate-500 hover:bg-blue-50/50 hover:text-blue-600',
      link: 'bg-transparent text-blue-600 hover:underline p-0 h-auto',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className 
        )}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}

        {!isLoading && LeftIcon && <LeftIcon className={cn("w-4 h-4", children ? "" : "m-0")} />}
        
        {/* Children có thể là text hoặc element */}
        {children}

        {!isLoading && RightIcon && <RightIcon className="w-4 h-4" />}
      </button>
    );
  }
);

Button.displayName = 'Button';