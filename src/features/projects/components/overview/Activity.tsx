
import { Button } from "../../../../components/ui/Button";
import { InfoItem } from "../../../../components/ui/InfoItem";
import { PROJECT_OVERVIEW_DATA } from "../../../../data/mockProjectDetail";
import { cn } from "../../../../utils/cn";

interface ActivityProps {
    showViewAll?: boolean;
    variant: 'modal' | 'full';
}

export const Activity = ({ showViewAll = false, variant }: ActivityProps) => (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-1">Recent Activity</h3>
        {variant === 'modal' && <p className="text-slate-400 text-sm mb-6">Latest updates and changes</p>}
        <div className={cn("flex flex-col gap-y-4 mb-4", variant === 'full' && "mt-6")}>
            {PROJECT_OVERVIEW_DATA.activities.map(act => (
                <InfoItem key={act.id} name={act.user} text={act.action} time={act.time} image={act.avatar} />
            ))}
        </div>
        {showViewAll && (
            <Button variant="outline">
                View All Activity
            </Button>
        )}
    </section>
);