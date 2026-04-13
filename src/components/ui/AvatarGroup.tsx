import React from 'react';
import { Avatar } from './Avatar';
import { cn } from '../../utils/cn';
import type { AvatarData } from '../../types/avatar';

interface AvatarGroupProps {
  users: AvatarData[];
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  users,
  max = 3,
  size = 'md',
  className
}) => {
  const visibleUsers = users.slice(0, max);
  const remainingCount = users.length - max;

  const moreSizeClasses = {
    sm: 'w-6 h-6 text-[10px]',
    md: 'w-8 h-8 text-xs',
    lg: 'w-10 h-10 text-sm',
  };

  return (
    <div className={cn('flex items-center -space-x-2.5', className)}>
      {visibleUsers.map((user, index) => (
        <Avatar
          key={index}
          src={user.src}
          alt={user.name}
          size={size}
          className="ring-2 ring-white"
        />
      ))}

      {remainingCount > 0 && (
        <div className={cn(
          'relative z-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 font-semibold ring-2 ring-white border-2 border-white',
          moreSizeClasses[size]
        )}>
          +{remainingCount}
        </div>
      )}
    </div>
  );
};