import { CalendarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { AvatarGroup } from '../../components/ui/AvatarGroup';
import { ActionMenu } from './ActionMenu';
import type { Project } from '../../types/projects';
import StatusBadge from '../../components/ui/StatusBadge';
import { ProgressBar } from '../../components/ui/ProgressBar';

interface ProjectRowProps {
  project: Project;
}

export const ProjectRow = ({ project }: ProjectRowProps) => {
  return (
    <tr className="group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
      <td className="pl-4 pr-3">
        <div className="flex items-center gap-4">
          <div className="w-1 h-10 rounded-full bg-blue-500 shrink-0" 
               style={{ backgroundColor: project.status === 'Completed' ? '#22c55e' : '#3b82f6' }} 
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className='text-lg text-slate-800 tracking-tight truncate' >{project.name}</h3>
              {project.isStarred && <StarSolid className="w-4 h-4 text-yellow-400" />}
            </div>
            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{project.description}</p>
          </div>
        </div>
      </td>

      <td className="py-4 px-3 text-center">
        <StatusBadge status={project.status} />
      </td>

      <td className="py-4 px-3 min-w-[140px]">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[11px] font-bold">
            <span className="text-slate-400 uppercase tracking-wider">Progress</span>
            <span className="text-slate-800">{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <ProgressBar progress={project.progress} />
          </div>
        </div>
      </td>

      <td className="py-4 px-3">
        <div className="flex items-center gap-2 text-sm text-slate-500 whitespace-nowrap">
          <CalendarIcon className="w-4 h-4 text-slate-400" />
          {project.deadline}
        </div>
      </td>

      <td className="py-4 px-3">
        <AvatarGroup users={project.members} size="sm" max={3} />
      </td>

      <td className="py-4 pl-3 pr-4 text-right">
        <ActionMenu projectId={project.id} />
      </td>
    </tr>
  );
};