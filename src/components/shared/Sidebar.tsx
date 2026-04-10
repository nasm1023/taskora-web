import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { MAIN_MENU } from "../../constaints/navigations";
import type { ProjectStatus } from "../../types/projects";
import StatusBadge from '../ui/StatusBadge';
import { InfoItem } from '../ui/InfoItem';
import { Button } from '../ui/Button';
import { NavItem } from '../ui/NavItem';

interface ProjectLinkProps {
  label: string;
  color: string;
  status: ProjectStatus;
}

export const Sidebar = () => {
  // Giả sử state để toggle (sau này bạn sẽ dùng)
  const isExpanded = false; 

  return (
    <aside className="w-64 h-screen border-r border-slate-100 bg-white flex flex-col overflow-y-auto">
      {/* 1. Logo Section */}
      <div className="p-6 pb-2 flex items-center gap-3">
        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white">
          <span className="text-xl font-bold tracking-tighter">T</span>
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">Taskora</span>
      </div>

      <div className='border'/>

      {/* 2. Scrollable Content Area */}
      <div className="flex-1  custom-scrollbar px-4 pt-4">
        
        {/* Main Navigation */}
        <nav className="space-y-1">
          {MAIN_MENU.map((item) => (
            <NavItem 
              key={item.id} 
              icon={item.icon} 
              label={item.label} 
              to={item.to}
            />
          ))}
        </nav>

        {/* 3. Latest Projects Section */}
        <div className="mt-10">
          <h3 className="px-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] text-left">
            Latest Projects
          </h3>
          
          <div className="mt-3 space-y-0.5">
            <ProjectLink label="Figma Design System" color="bg-purple-500" status="Progress" />
            <ProjectLink label="Keep React" color="bg-blue-500" status="Planning" />
            <ProjectLink label="StaticMania" color="bg-green-500" status="Completed" />
            <ProjectLink label="Mobile App" color="bg-sky-500" status="Progress" />
            <ProjectLink label="E-commerce" color="bg-indigo-500" status="Progress" />
          </div>

          {/* Styled See All Button */}
          <button className="w-full mt-2 px-2 py-2 flex items-center justify-between text-xs font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors group">
            <span>{isExpanded ? 'Less all project' : 'See all project'}</span>
            {isExpanded ? (
              <ChevronUpIcon className="w-3.5 h-3.5" />
            ) : (
              <ChevronDownIcon className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>

        {/* 4. Latest Message Section */}
        <div className="mt-10 pb-10">
          <h3 className="px-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] text-left">
            Latest Message
          </h3>
          
          <div className="mt-4 space-y-5 px-2">
            <InfoItem 
              name="Alex Morgan" 
              time="2m" 
              text="Hey, can you review the..." 
              image="https://i.pravatar.cc/150?u=alex"
              isUnread={true}
            />
            <InfoItem 
              name="Jessica Chen" 
              time="1h" 
              text="I've pushed the code chan..." 
              image="https://i.pravatar.cc/150?u=jess"
            />
             <InfoItem 
              name="Ryan Park" 
              time="3h" 
              text="Meeting at 3pm today" 
              image="https://i.pravatar.cc/150?u=ryan"
            />
          </div>

          <Button 
            variant="ghost" 
            fullWidth 
            rightIcon={ChevronDownIcon}
            className="justify-between px-2 text-xs group" 
          >
            <span>See all message</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};


const ProjectLink = ({ label, color, status }: ProjectLinkProps) => (
  <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl cursor-pointer group transition-all">
    <div className="flex items-center gap-3 overflow-hidden">
      <span className={`w-1.5 h-1.5 rounded-full ${color} shrink-0 ring-4 ring-transparent group-hover:ring-slate-100 transition-all`} />
      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 truncate transition-colors">
        {label}
      </span>
    </div>
    <StatusBadge status={status} />
  </div>
);