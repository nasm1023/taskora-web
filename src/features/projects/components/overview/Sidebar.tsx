import { InfoBlock } from "../../../../components/ui/InfoBlock";
import { InfoItem } from "../../../../components/ui/InfoItem";

interface SidebarDetailsProps {
    details?: {
        client?: string;
        budget?: string | number;
        startDate?: string;
        deadline?: string;
        manager?: {
            name: string;
            avatar?: string;
        }
    }
}

export const SidebarDetails = ({ details }: SidebarDetailsProps) => {
    if (!details || !details.manager) return null;
    return (
        <section className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Project Details</h3>
            <div className="space-y-4">
                <InfoBlock label="Client" value={details.client} />
                <InfoBlock label="Budget" value={details.budget} />
                <InfoBlock label="Start Date" value={details.startDate} />
                <InfoBlock label="Deadline" value={details.deadline} />

                <div className="pt-2">
                    <p className="text-[11px] text-slate-400 uppercase tracking-widest mb-1 ">Project Manager</p>
                    <InfoItem image={details.manager.avatar ?? ""} name={details.manager.name} />
                </div>
            </div>
        </section>
    )
};