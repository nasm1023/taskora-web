import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../components/ui/Button";
import { DiscussionThread } from "./DiscussionThread";
import { DiscussionSidebar } from "./DiscussionSidebar";
import { useEffect, useState } from "react";
import { projectService } from "../../../../api/services/projectService";
import type { DiscussionData } from "../../../../types/projects";

interface ProjectDiscussionProps {
    variant?: 'modal' | 'full';
    projectId: string;
}

export const ProjectDiscussion = ({ variant = 'modal', projectId }: ProjectDiscussionProps) => {
    const [data, setData] = useState<DiscussionData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDiscussions = async () => {
            if (!projectId) return;
            try {
                setLoading(true);
                const res = await projectService.getDiscussions(projectId);
                setData(Array.isArray(res) ? res[0] : res);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchDiscussions();
    }, [projectId]);

    if (loading) return <div className="p-10 animate-pulse text-slate-400">Loading conversations...</div>;
    if (!data) return <div className="p-10 text-slate-400">No discussions yet.</div>;
    // BẢN POPUP
    if (variant === 'modal') {
        return (
            <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                <div className="mb-6 flex justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Project Discussions</h3>
                        <p className="text-slate-400 text-sm">Conversations and comments</p>
                    </div>
                    <Button variant="outline" size="sm" leftIcon={ChatBubbleLeftEllipsisIcon}>New Topic</Button>
                </div>

                <div className="h-[500px]">
                    <DiscussionThread activeThread={data.activeThread} />
                </div>
            </section>
        );
    }

    // BẢN FULL PAGE
    return (
        <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">

            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Discussions</h1>
                    <p className="text-slate-500 text-sm mt-1">Project discussions and comments</p>
                </div>
                <Button variant="primary" leftIcon={ChatBubbleLeftEllipsisIcon} className="bg-slate-900 text-white hover:bg-slate-800">
                    New Discussion
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
                <div className="lg:col-span-2 h-full">
                    <DiscussionThread activeThread={data.activeThread} />
                </div>
                <div className="h-full">
                    <DiscussionSidebar recent={data.recent} teamActivity={data.teamActivity} />
                </div>
            </div>
        </div>
    );
};