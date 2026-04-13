import type { TimelineItem } from "../../../../types/projects";
import { cn } from "../../../../utils/cn";

interface TimelineProps {
    timelines?: TimelineItem[];
}

export const Timeline = ({ timelines = [] }: TimelineProps) => (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-1">Project Timeline</h3>
        <p className="text-slate-400 text-sm mb-8">Key milestones and deadlines</p>

        <div className="space-y-0">
            {timelines.map((item, index) => (
                <div key={item.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className={cn(
                            "w-3 h-3 rounded-full mt-1.5 shrink-0 ring-4 ring-white shadow-sm",
                            item.status === 'completed' ? "bg-green-500" :
                                item.status === 'current' ? "bg-yellow-400" : "bg-slate-200"
                        )} />
                        {index !== timelines.length - 1 && (
                            <div className="w-px h-full bg-slate-100 my-1 min-h-[50px]" />
                        )}
                    </div>
                    <div className="pb-10">
                        <h4 className="text-sm font-bold text-slate-900">
                            {item.title}
                            <span className="text-slate-400 font-normal ml-3 text-xs">{item.date}</span>
                        </h4>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-xl">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);