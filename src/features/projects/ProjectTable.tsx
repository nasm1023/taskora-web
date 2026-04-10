import type { Project } from '../../types/projects';
import { ProjectRow } from './ProjectRow';

interface ProjectTableProps {
  projects: Project[];
}

export const ProjectTable = ({ projects }: ProjectTableProps) => {
  return (
    <div className="w-full overflow-x-auto bg-white border border-slate-100 rounded-2xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/50">
            <th className="py-4 px-3 text-xs text-slate-400 uppercase">Project</th>
            <th className="py-4 px-3 text-xs text-slate-400 uppercase">Status</th>
            <th className="py-4 px-3 text-xs text-slate-400 uppercase">Progress</th>
            <th className="py-4 px-3 text-xs text-slate-400 uppercase">Deadline</th>
            <th className="py-4 px-3 text-xs text-slate-400 uppercase">Team</th>
            <th className="py-4 pl-3 pr-8 text-xs text-slate-400 uppercase text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};