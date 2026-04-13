import { CalendarIcon, ClockIcon, StarIcon as StarSolid } from '@heroicons/react/24/solid';
import type { ProjectStatus } from "../../types/projects";
import { Avatar } from '../../components/ui/Avatar';

const borderStyles: Record<string, string> = {
  'In Progress': 'border-yellow-400',
  'Planning': 'border-blue-400',
  'Completed': 'border-green-400',
  'On Hold': 'border-slate-300',
  'Progress': 'border-indigo-400',
};

export const ProjectTitle = ({
  name,
  isStarred = false,
  description,
  status,
  avatar,
  startDate,
  deadline,
  children
}: {
  name: string,
  isStarred?: boolean,
  description: string,
  status: ProjectStatus,
  avatar?: string;
  startDate?: string;
  deadline?: string;
  children?: React.ReactNode;
}) => {
  const borderColor = borderStyles[status] || 'border-slate-200';
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between justify-between items-left sm:items-center mb-4 gap-4 w-full p-4 rounded-xl">
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
        {children && (
          <div className="flex items-center gap-2 mt-3">
            {children}
          </div>
        )}
      </div>
      <div className="shrink-0 flex flex-col items-start sm:items-end gap-2 text-[13px] text-slate-500">

        {(deadline || startDate) && (
          <div className="flex flex-col gap-1.5 text-right">
            {deadline && (
              <div className="flex items-center justify-start sm:justify-end gap-1.5">
                <CalendarIcon className="w-4 h-4 text-slate-400" />
                <span>Deadline: {deadline}</span>
              </div>
            )}
            {startDate && (
              <div className="flex items-center justify-start sm:justify-end gap-1.5">
                <ClockIcon className="w-4 h-4 text-slate-400" />
                <span>Started: {startDate}</span>
              </div>
            )}
          </div>
        )}

        {avatar && !deadline && !startDate && (
          <Avatar src={avatar} alt={name} />
        )}
      </div>
    </div>
  );
};