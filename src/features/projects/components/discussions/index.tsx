import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../components/ui/Button";
import { DiscussionThread } from "./DiscussionThread";
import { DiscussionSidebar } from "./DiscussionSidebar";
import { useProjectDiscussion } from "../../../../hooks/useProjectDiscussion";
import { LoadingState } from "../../../../components/ui/LoadingState";
import { ErrorState } from "../../../../components/ui/ErrorState";

interface ProjectDiscussionProps {
    variant?: 'modal' | 'full';
    projectId: string;
}

export const ProjectDiscussion = ({ variant = 'modal', projectId }: ProjectDiscussionProps) => {
    const { data, loading, error, refetch } = useProjectDiscussion(projectId);

    if (loading) return <LoadingState message="Đang tải các cuộc hội thoại..." />;
    if (error) return <ErrorState message={error.message} onRetry={refetch} />;
    if (!data) return <div className="p-10 text-slate-400">Chưa có thảo luận nào.</div>;

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