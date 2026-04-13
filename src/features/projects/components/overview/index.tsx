import { Activity } from "./Activity";
import { Attachments } from "./Attachments";
import { Description } from "./Description";
import { SidebarDetails } from "./Sidebar";
import { Timeline } from "./Timeline";

interface ProjectOverviewProps {
  variant?: 'modal' | 'full';
}

export const ProjectOverview = ({ variant = 'modal' }: ProjectOverviewProps) => {

  // Render cho bản Popup
  if (variant === 'modal') {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Description />
        <div className="grid grid-cols-2 gap-6">
          <Activity variant={variant} />
          <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm h-full">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Upcoming Milestones</h3>
            {/* ... map milestones ... */}
          </section>
        </div>
      </div>
    );
  }

  // Render cho bản Full Page
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-500 text-left">
      <div className="lg:col-span-2 space-y-6">
        <Description />
        <Timeline />
      </div>

      <div className="space-y-6">
        <SidebarDetails />
        <Activity variant={variant} showViewAll={true} />
        <Attachments />
      </div>
    </div>
  );
};