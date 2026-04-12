import { PROJECT_OVERVIEW_DATA } from "../../../data/mockProjectDetail";
import { InfoItem } from "../../../components/ui/InfoItem";
import { Button } from "../../../components/ui/Button";

export const ProjectTeam = () => {
  return (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Team Members</h3>
        <p className="text-slate-400 text-sm  mb-16">People working on this project</p>
      </div>

      <div className="space-y-3">
        {PROJECT_OVERVIEW_DATA.activities.map(task => (
          <div className="flex justify-between bg-slate-100 p-2 mb-3 rounded-lg">
            <InfoItem 
              key={task.id}
              name={task.user}
              text={task.action}
              image={task.avatar}
            />
            <Button variant="outline" className="bg-white"> View Profile</Button>
          </div>
        ))}
      </div>
    </section>
  );
};