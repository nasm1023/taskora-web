import React from 'react';
import { NavLink } from 'react-router';

interface NavItemProps {
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    }
  >;
  label: string;
  to: string;
}

export const NavItem: React.FC<NavItemProps> = ({ 
  icon: Icon,
  label, 
  to
}) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => `
        flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all duration-200
        ${isActive 
          ? 'bg-blue-50 text-blue-600 shadow-sm' 
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
        }
      `}
    >
    {({ isActive }) => (
        <>
          <Icon 
            className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} 
            aria-hidden="true"
          />
          <span className={`text-sm font-medium ${isActive ? 'font-semibold' : ''}`}>
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
};