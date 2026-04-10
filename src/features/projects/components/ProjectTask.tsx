import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { Button } from "../../../components/ui/Button";
import { MOCK_TASKS } from "../../../data/mockProjectDetail";
import { ProjectTitle } from "../ProjectTitle";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export const ProjectTasks = () => {
  return (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Project Tasks</h3>
        <p className="text-slate-400 text-sm  mb-16">Manage and track project tasks</p>
      </div>

      <div className="space-y-3">
        {MOCK_TASKS.map(task => (
          <ProjectTitle 
            key={task.id}
            name={task.name}
            status={task.status}
            description={`${task.status} ${task.due}`}
          />
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <Button variant="outline" size="sm" leftIcon={CheckBadgeIcon}>
          View All Tasks
        </Button>
        <Button 
            variant="primary" 
            size="sm" 
            leftIcon={ArrowTopRightOnSquareIcon}
            onClick={() => {}} 
            className='bg-black'
            >
          Go to Kanban Board
        </Button>
      </div>
    </section>
  );
};