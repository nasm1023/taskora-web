import { MOCK_PROJECTS } from "../../../data/mockProject";
import { InfoCard } from "../../../components/ui/InfoCard";
import { ProgressBar } from "../../../components/ui/ProgressBar";
import { useProjectFilters } from "../../../hooks/useProjectFilter";

export const ProjectAnalytics = () => {
  const { selectedProjectId } = useProjectFilters();
  const project = MOCK_PROJECTS.find((p) => p.id == selectedProjectId)
  if (!project) {
    return (
      <p>Không có dữ liệu.</p>
    );
  }
  return (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Project Analytics</h3>
        <p className="text-slate-400 text-sm  mb-16">Performance metrics and insights</p>
      </div>

      <div className="space-y-3">
         <div className="grid grid-cols-3 gap-4 mb-8">
            <InfoCard title="Tasks Completed" value={`${project.tasksCount}/${project.activitiesCount}`} content={<ProgressBar progress={project.progress} />} />
            <InfoCard title="Time Spent" value={project.timeSpent} subValue={`Out of ${project.timeEstimate} estimated`} />
            <InfoCard title="Budget Used" value={project.budgetUsed} subValue={`Out of ${project.budget}`} />
          </div>
      </div>
      <div className="flex w-full bg-slate-100 h-[300px] rounded-lg p-2 items-center justify-center">
        Project analytics charts will be displayed here
      </div>
    </section>
  );
};