import React from 'react';
import {  CalendarIcon, ClipboardDocumentListIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import type { Project } from '../../types/projects';
import { AvatarGroup } from '../../components/ui/AvatarGroup';
import { ProjectTitle } from './ProjectTitle';
import { ActionMenu } from './ActionMenu';
import { cn } from '../../utils/cn';

interface ProjectCardProps {
  project: Project;
  onAction?: (actionId: string) => void;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
//   const actions = [
//     { label: 'View Details', onClick: () => {} },
//     { label: 'Mark as Completed', onClick: () => {} },
//     { label: 'Archive Project', variant: 'danger', onClick: () => {} },
//   ];

  return (
    <div className="w-full h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
      <ProjectTitle 
        name={project.name} 
        isStarred={project.isStarred} 
        description={project.description}
        status={project.status}
      />

      <div className="flex justify-between items-center mt-6 text-slate-400">
        <div className="flex items-center gap-2 text-sm">
          <CalendarIcon className="w-4 h-4" />
          <span>Deadline: {project.deadline}</span>
        </div>
        <ActionMenu projectId={''} />
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-medium text-slate-500">Progress</span>
          <span className="text-sm font-bold text-slate-800">{project.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-slate-900 h-full transition-all duration-500" 
            style={{ width: `${project.progress}%` }} 
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-6">
        <AvatarGroup users={project.members} size="sm" max={3} />
        <div className="flex gap-4 text-slate-400 text-xs ">
          <div className="flex items-center gap-1">
            <ClipboardDocumentListIcon className="w-4 h-4" />
            {project.tasksCount} tasks
          </div>
          <div className="flex items-center gap-1">
            <ChartBarIcon className="w-4 h-4" />
            {project.activitiesCount} activities
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-y-4 mt-4 pt-3 rounded-xl border-t border-slate-100">
        <InfoBlock label="Client" value={project.client} />
        <InfoBlock label="Budget" value={project.budget} />
        <InfoBlock label="Start Date" value={project.startDate} />
        <InfoBlock 
          label="Priority" 
          value={
            <span className={cn(
              "px-2 py-0.5 rounded-xl text-[10px] font-semibold uppercase",
              project.priority === 'High' ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
            )}>
              {project.priority}
            </span>
          } 
        />
      </div>
    </div>
  );
};

const InfoBlock = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="text-left">
    <p className="text-[11px] text-slate-400 uppercase tracking-wider">{label}</p>
    <div className="text-sm text-slate-800">{value}</div>
  </div>
);