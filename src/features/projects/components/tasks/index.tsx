import { useState } from "react";
import { ArrowTopRightOnSquareIcon, CheckBadgeIcon, ViewColumnsIcon, ListBulletIcon, CalendarDaysIcon, FunnelIcon, ArrowsUpDownIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Button } from "../../../../components/ui/Button";
import { ProjectTitle } from "../../ProjectTitle";
import { cn } from "../../../../utils/cn";
import { KanbanColumn } from "./Column";
import type { TaskViewType } from "../../../../types/projects";
import { LoadingState } from "../../../../components/ui/LoadingState";
import { ErrorState } from "../../../../components/ui/ErrorState";
import { useProjectTasks } from "../../../../hooks/useProjectTask";

interface ProjectTasksProps {
  variant?: 'modal' | 'full';
  projectId: string;
}

const VIEW_OPTIONS: { id: TaskViewType; label: string; icon: React.ElementType }[] = [
  { id: 'board', label: 'Board', icon: ViewColumnsIcon },
  { id: 'list', label: 'List', icon: ListBulletIcon },
  { id: 'calendar', label: 'Calendar', icon: CalendarDaysIcon },
];

export const ProjectTasks = ({ variant = 'modal', projectId }: ProjectTasksProps) => {
  const [taskView, setTaskView] = useState<TaskViewType>('board');
  const { tasks, columns, loading, error, refetch } = useProjectTasks(projectId);

  if (loading) return <LoadingState message="Đang sắp xếp công việc..." />;
  if (error) return <ErrorState message={error.message} onRetry={refetch} />;
  if (variant === 'modal') {
    return (
      <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900">Project Tasks</h3>
          <p className="text-slate-400 text-sm">Manage and track project tasks</p>
        </div>

        <div className="space-y-3">
          {tasks.slice(0, 3).map(task => (
            <ProjectTitle
              key={task.id}
              name={task.title}
              status={task.columnId === 'todo' ? 'Planning' : task.columnId === 'in-progress' ? 'In Progress' : 'Completed'}
              description={`${task.category} • ${task.date}`}
            />
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="outline" size="sm" leftIcon={CheckBadgeIcon}>View All Tasks</Button>
          <Button variant="primary" size="sm" leftIcon={ArrowTopRightOnSquareIcon} className="bg-black">
            Go to Kanban Board
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">

      {/* TOP BAR CONTROL */}
      <div className="flex items-center justify-between bg-white px-5  py-3">

        {/* Segmented Control */}
        <div className="flex items-center p-1 bg-slate-100 rounded-lg">
          {VIEW_OPTIONS.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant="ghost"
              onClick={() => setTaskView(id)}
              className={cn(
                "px-4 py-2 rounded-md border-none transition-all duration-200 gap-2 h-auto",
                taskView === id
                  ? "bg-white text-slate-900 shadow-sm hover:bg-white"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
              )}
            >
              <Icon className={cn("w-4 h-4", taskView === id ? "stroke-[2.5px]" : "stroke-2")} />
              {label}
            </Button>
          ))}
        </div>

        {/* Filter & Sort Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" leftIcon={FunnelIcon} className="bg-white">Filter</Button>
          <Button variant="outline" size="sm" leftIcon={ArrowsUpDownIcon} className="bg-white">Sort</Button>
          <Button variant="outline" size="sm" leftIcon={Squares2X2Icon} className="bg-white">Group By</Button>
        </div>
      </div>

      {/* 2. BOARD AREA */}
      {taskView === 'board' && (
        <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-250px)] items-start">
          {columns.map(column => {
            const columnTasks = tasks.filter(t => t.columnId === column.id);
            return <KanbanColumn key={column.id} column={column} tasks={columnTasks} />;
          })}
        </div>
      )}

      {/* List and Calendar */}
      {taskView !== 'board' && (
        <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl">
          <p className="text-slate-400">View is under construction...</p>
        </div>
      )}
    </div>
  );
};
