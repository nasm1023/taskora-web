import { Button } from "../../../../components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { TeamMemberTable } from "./TeamMemberTable";
import { TeamMemberList } from "./TeamMemberList";
import { LoadingState } from "../../../../components/ui/LoadingState";
import { ErrorState } from "../../../../components/ui/ErrorState";
import { useProjectTeam } from "../../../../hooks/useProjectTeam";

interface ProjectTeamProps {
    variant?: 'modal' | 'full';
    projectId: string;
}

export const ProjectTeam = ({ variant = 'modal', projectId }: ProjectTeamProps) => {
    const { members, loading, error, refetch } = useProjectTeam(projectId);

    if (loading) return <LoadingState message="Đang tìm kiếm đồng đội..." />;

    if (error) return <ErrorState message={error.message} onRetry={refetch} />;

    if (variant === 'full') {
        return (
            <div className="space-y-6 animate-in fade-in duration-500">
                <div className="flex justify-between items-end">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-slate-900">Team Members</h3>
                        <p className="text-slate-400 text-sm mt-1">Manage team members and their roles</p>
                    </div>
                    <Button leftIcon={PlusIcon} className="bg-slate-900">
                        Add Team Member
                    </Button>
                </div>

                <TeamMemberTable members={members} />
            </div>
        );
    }

    return (
        <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Team Members</h3>
                <p className="text-slate-400 text-sm">People working on this project</p>
            </div>
            <TeamMemberList members={members} />
        </section>
    );
};