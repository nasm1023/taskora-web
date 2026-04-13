import { InfoBlock } from "../../../../components/ui/InfoBlock";
import { InfoItem } from "../../../../components/ui/InfoItem";
import { PROJECT_OVERVIEW_DATA } from "../../../../data/mockProjectDetail";


export const SidebarDetails = () => (
    <section className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Project Details</h3>
        <div className="space-y-4">
            <InfoBlock label="Client" value={PROJECT_OVERVIEW_DATA.details.client} />
            <InfoBlock label="Budget" value={PROJECT_OVERVIEW_DATA.details.budget} />
            <InfoBlock label="Start Date" value={PROJECT_OVERVIEW_DATA.details.startDate} />
            <InfoBlock label="Deadline" value={PROJECT_OVERVIEW_DATA.details.deadline} />

            <div className="pt-2">
                <p className="text-[11px] text-slate-400 uppercase tracking-widest mb-1 ">Project Manager</p>
                <InfoItem image={PROJECT_OVERVIEW_DATA.details.manager.avatar} name={PROJECT_OVERVIEW_DATA.details.manager.name} />
            </div>
        </div>
    </section>
);