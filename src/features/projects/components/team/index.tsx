import { TEAM_MEMBERS } from "../../../../data/mockProjectDetail";
import { Button } from "../../../../components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { TeamMemberTable } from "./TeamMemberTable";
import { TeamMemberList } from "./TeamMemberList";

interface ProjectTeamProps {
    variant?: 'modal' | 'full';
}

export const ProjectTeam = ({ variant = 'modal' }: ProjectTeamProps) => {
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

                <TeamMemberTable members={TEAM_MEMBERS} />
            </div>
        );
    }

    return (
        <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Team Members</h3>
                <p className="text-slate-400 text-sm">People working on this project</p>
            </div>
            <TeamMemberList members={TEAM_MEMBERS} />
        </section>
    );
};