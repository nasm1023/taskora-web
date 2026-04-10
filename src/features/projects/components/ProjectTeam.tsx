import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { Button } from "../../../components/ui/Button";
import { PROJECT_OVERVIEW_DATA } from "../../../data/mockProjectDetail";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { InfoItem } from "../../../components/ui/InfoItem";

export const ProjectTeam = () => {
  return (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Team Members</h3>
        <p className="text-slate-400 text-sm  mb-16">People working on this project</p>
      </div>

      <div className="space-y-3">
        {PROJECT_OVERVIEW_DATA.activities.map(task => (
          <InfoItem 
            key={task.id}
            name={task.user}
            text={task.action}
            image={task.avatar}
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