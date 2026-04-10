import React from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-6 h-6 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-10 h-10 border-[3px]',
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt = 'User', size = 'md', className }) => {
  return (
    <div className={cn(
      'relative inline-block rounded-full overflow-hidden border-white bg-slate-200 shrink-0',
      sizeClasses[size],
      className
    )}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-slate-500 uppercase">
          {alt.substring(0, 2)}
        </div>
      )}
    </div>
  );
};