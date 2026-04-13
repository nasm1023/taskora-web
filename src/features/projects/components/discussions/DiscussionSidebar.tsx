import { Avatar } from "../../../../components/ui/Avatar";
import type { DiscussionActivity, RecentDiscussion } from "../../../../types/projects";
import { cn } from "../../../../utils/cn";

interface SidebarProps {
    recent: RecentDiscussion[];
    teamActivity: DiscussionActivity[];
}

export const DiscussionSidebar = ({ recent = [], teamActivity = [] }: SidebarProps) => (
    <div className="space-y-6 h-full overflow-y-auto pr-2 custom-scrollbar">

        {/* Recent Discussions */}
        <section className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Discussions</h3>
            <div className="space-y-3">
                {recent.map(item => (
                    <div key={item.id} className="p-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl cursor-pointer border border-slate-100/50">
                        <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 mb-3">Started by {item.author} • {item.time}</p>
                        <div className="flex items-center gap-3">
                            <span className={cn(
                                "px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider",
                                item.status === 'Active' ? 'bg-green-100 text-green-700' :
                                    item.status === 'Needs Input' ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-200 text-slate-600'
                            )}>
                                {item.status}
                            </span>
                            <span className="text-xs font-medium text-slate-400">{item.replies} replies</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Team Activity */}
        <section className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Team Activity</h3>
            <div className="space-y-5">
                {teamActivity.map(act => (
                    <div key={act.id} className="flex gap-3">
                        <Avatar src={act.avatar} size="sm" className="shrink-0" />
                        <div className="text-sm leading-tight mt-0.5">
                            <span className="font-bold text-slate-900">{act.user} </span>
                            <span className="text-slate-500">{act.action} </span>
                            <span className="text-blue-600 font-medium cursor-pointer hover:underline">{act.target}</span>
                            <p className="text-xs text-slate-400 mt-1">{act.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
);