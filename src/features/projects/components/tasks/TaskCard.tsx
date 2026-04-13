import { CalendarIcon, PaperClipIcon, ChatBubbleLeftIcon, EllipsisVerticalIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { cn } from "../../../../utils/cn";
import { ProgressBar } from "../../../../components/ui/ProgressBar";
import { AvatarGroup } from "../../../../components/ui/AvatarGroup";
import { Button } from "../../../../components/ui/Button";
import type { KanbanTask } from "../../../../types/projects";

export const TaskCard = ({ task }: { task: KanbanTask }) => {
    const priorityColors: Record<string, string> = {
        High: 'text-red-600 bg-red-50 border-red-100',
        Medium: 'text-blue-600 bg-blue-50 border-blue-100',
        Low: 'text-green-600 bg-green-50 border-green-100',
    };

    return (
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-grab group">
            {/* Header Card */}
            <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{task.category}</span>
                <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold border", priorityColors[task.priority])}>
                    {task.priority}
                </span>
            </div>

            {/* Title */}
            <h4 className="text-sm font-bold text-slate-900 mb-4 text-left">{task.title}</h4>

            {/* Progress */}
            <div className="mb-4">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-500 mb-1.5">
                    <span>Progress</span>
                    <span>{task.progress}%</span>
                </div>
                <ProgressBar progress={task.progress} />
            </div>

            {/* Footer Card */}
            <div className="flex flex-col justify-between items-left mt-4 pt-4 border-t border-slate-50">
                <div className="flex gap-3 text-[11px] font-medium text-slate-400">
                    <div className="flex items-center gap-1"><CalendarIcon className="w-3.5 h-3.5" /> {task.date}</div>
                    {task.attachments > 0 && <div className="flex items-center gap-1"><PaperClipIcon className="w-3.5 h-3.5" /> {task.attachments}</div>}
                    {task.comments > 0 && <div className="flex items-center gap-1"><ChatBubbleLeftIcon className="w-3.5 h-3.5" /> {task.comments}</div>}
                    <div className="flex items-center gap-1"><CheckBadgeIcon className="w-3.5 h-3.5" /> {task.subtasks}</div>
                </div>

                <div className="flex justify-between items-center gap-2">
                    <AvatarGroup users={task.members} size="sm" max={2} />
                    <Button variant="ghost">
                        <EllipsisVerticalIcon className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};