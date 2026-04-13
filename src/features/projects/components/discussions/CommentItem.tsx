import { ChatBubbleLeftIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Avatar } from "../../../../components/ui/Avatar";
import { Button } from "../../../../components/ui/Button";
import type { DiscussionComment } from "../../../../types/projects";

export const CommentItem = ({ comment }: { comment: DiscussionComment }) => (
    <div className="flex gap-4 group">
        <Avatar src={comment.avatar} alt={comment.name} size="md" className="shrink-0 mt-1" />
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-slate-900">{comment.name}</span>
                <span className="text-xs text-slate-400">• {comment.time}</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {comment.text}
            </p>

            <div className="flex items-center gap-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button leftIcon={ChatBubbleLeftIcon} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                    Reply
                </Button>
                <Button leftIcon={LinkIcon} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                    <LinkIcon className="w-4 h-4" /> Copy Link
                </Button>
            </div>
        </div>
    </div>
);