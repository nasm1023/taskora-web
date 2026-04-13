import { EllipsisVerticalIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TaskCard } from "./TaskCard";
import { Button } from "../../../../components/ui/Button";
import type { KanbanColumnType, KanbanTask } from "../../../../types/projects";

export const KanbanColumn = ({ column, tasks }: { column: KanbanColumnType, tasks: KanbanTask[] }) => {
    return (
        <div className="flex flex-col bg-white rounded-2xl border border-slate-100 w-[340px] shrink-0 max-h-full">
            {/* Column Header */}
            <div className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900">{column.title}</h3>
                    <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md text-xs font-bold text-slate-500">
                        {tasks.length}
                    </span>
                </div>
                <Button variant="ghost">
                    <EllipsisVerticalIcon className="w-5 h-5" />
                </Button>
            </div>

            {/* Task List (Scrollable) */}
            <div className="px-3 pb-3 space-y-3 overflow-y-auto flex-1 custom-scrollbar">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>

            {/* Add Task Button */}
            <div className="p-3 bg-white/50 border-t border-slate-100 rounded-b-2xl mt-auto">
                <Button variant="ghost" fullWidth leftIcon={PlusIcon} className="text-slate-500 hover:text-slate-800 justify-start">
                    Add Task
                </Button>
            </div>
        </div>
    );
};