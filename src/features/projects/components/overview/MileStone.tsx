import { MilestoneItem } from "../../../../components/ui/MileStoneItem"

interface MilestoneType {
    id: string;
    title: string;
    due: string;
    color: string;
}

interface MileStoneProps {
    milestones: MilestoneType[];
}

export const MileStone = ({ milestones }: MileStoneProps) => {
    return (
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm h-full">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Upcoming Milestones</h3>
            <p className="text-slate-400 text-sm mb-6">Important project deadlines</p>
            <div className="space-y-4">
                {milestones.length > 0 ? (
                    milestones.map((m) => (
                        <MilestoneItem
                            key={m.id}
                            title={m.title}
                            due={m.due}
                            colorClass={m.color}
                        />
                    ))
                ) : (
                    <p className="text-sm text-slate-400 italic">No milestones yet.</p>
                )}
            </div>
        </div>
    )
}