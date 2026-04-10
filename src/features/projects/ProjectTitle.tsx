import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import type { ProjectStatus } from "../../types/projects";
import StatusBadge from '../../components/ui/StatusBadge';

const borderStyles: Record<string, string> = {
  'In Progress': 'border-yellow-400',
  'Planning': 'border-blue-400',
  'Completed': 'border-green-400',
  'On Hold': 'border-slate-300',
  'Progress': 'border-indigo-400',
};

export const ProjectTitle = ({ name, isStarred = false, description, status }: {name: string, isStarred?: boolean, description: string, status: ProjectStatus }) => {
  const borderColor = borderStyles[status] || 'border-slate-200';
  return (
    <div className="flex justify-between items-start mb-4 gap-4 w-full">
      <div className={`pl-4 border-l-4 ${borderColor} min-w-0 flex-1`}>
        
        <div className="flex items-center gap-2">
          <h3 className="text-lg text-slate-800 tracking-tight truncate">
            {name}
          </h3>
          {isStarred && (
            <StarSolid className="w-4 h-4 text-yellow-400 shrink-0" />
          )}
        </div>

        <p className="text-left text-sm text-slate-400 mt-1 truncate">
          {description}
        </p>
      </div>
      <div className="shrink-0">
        <StatusBadge status={status} />
      </div>
    </div>
  );
};