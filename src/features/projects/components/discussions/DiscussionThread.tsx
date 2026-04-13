import { Button } from "../../../../components/ui/Button";
import { Avatar } from "../../../../components/ui/Avatar";
import { CommentItem } from "./CommentItem";
import type { Thread } from "../../../../types/projects";

interface ThreadProps {
    activeThread: Thread;
}

export const DiscussionThread = ({ activeThread }: ThreadProps) => {
    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col h-full">

            {/* Thread Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">{activeThread.title}</h2>
                    <p className="text-sm text-slate-500 mt-1">Started by {activeThread.author} • {activeThread.time}</p>
                </div>
                <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full">
                    {activeThread.status}
                </span>
            </div>

            {/* Comment List */}
            <div className="p-6 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
                {activeThread.comments.map((comment, index) => (
                    <div key={comment.id}>
                        <CommentItem comment={comment} />
                        {index < activeThread.comments.length - 1 && (
                            <hr className="border-slate-100 mt-8" />
                        )}
                    </div>
                ))}
            </div>

            {/* Reply Input Box */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4 items-start shrink-0">
                <Avatar src="https://i.pravatar.cc/150?u=nam" size="md" className="shrink-0" />
                <div className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-slate-200 transition-shadow">
                    <textarea
                        rows={3}
                        placeholder="Write a reply..."
                        className="w-full p-3 text-sm text-slate-700"
                    />
                    <div className="flex justify-end items-center px-3 py-2 border-t border-slate-100 bg-slate-50/50">
                        <Button variant="primary" size="sm" className="bg-black text-white hover:bg-slate-800">
                            Post Reply
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};