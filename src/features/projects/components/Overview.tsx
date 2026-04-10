import { InfoItem } from "../../../components/ui/InfoItem";
import { MilestoneItem } from "../../../components/ui/MileStoneItem";
import { PROJECT_OVERVIEW_DATA } from "../../../data/mockProjectDetail";

export const ProjectOverview = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Description Section */}
      <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-1">Project Description</h3>
        <p className="text-slate-400 text-sm mb-16">Detailed information about the project</p>
        
        <p className="text-slate-600 leading-relaxed mb-8">{PROJECT_OVERVIEW_DATA.description}</p>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-slate-400 text-sm mb-4">Project Goals</h4>
            <ul className="space-y-3">
              {PROJECT_OVERVIEW_DATA.goals.map((goal, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" /> {goal}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-400 text-sm mb-4">Key Deliverables</h4>
            <ul className="space-y-3">
              {PROJECT_OVERVIEW_DATA.deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Activity & Milestones Row */}
      <div className="grid grid-cols-2 gap-6">
        <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm h-full">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Recent Activity</h3>
          <p className="text-slate-400 text-sm mb-6">Latest updates and changes</p>
          <div className="flex flex-col gap-y-4">
            {PROJECT_OVERVIEW_DATA.activities.map(act => (
              <InfoItem key={act.id} name={`${act.user} ${act.action}`} text={act.time} image={act.avatar} />
            ))}
          </div>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm h-full">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Upcoming Milestones</h3>
          <p className="text-slate-400 text-sm mb-6">Important project deadlines</p>
          <div >
            {PROJECT_OVERVIEW_DATA.milestones.map(m => (
              <MilestoneItem key={m.id} title={m.title} due={m.due} colorClass={m.color} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};