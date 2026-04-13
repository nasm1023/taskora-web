import { Button } from "../../../../components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { TeamMemberTable } from "./TeamMemberTable";
import { TeamMemberList } from "./TeamMemberList";
import { useEffect, useState } from "react";
import type { TeamMember } from "../../../../types/projects";
import { projectService } from "../../../../api/services/projectService";

interface ProjectTeamProps {
    variant?: 'modal' | 'full';
    projectId: string;
}

export const ProjectTeam = ({ variant = 'modal', projectId }: ProjectTeamProps) => {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            if (!projectId) return;
            try {
                setLoading(true);
                const data = await projectService.getTeamMembers(projectId);
                setMembers(data);
            } catch (error) {
                console.error("Lỗi fetch team:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
    }, [projectId]);

    if (loading) return <div className="p-8 text-center text-slate-400 italic">Đang tải danh sách thành viên...</div>;
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