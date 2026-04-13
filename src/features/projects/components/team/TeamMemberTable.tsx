import { ChatBubbleLeftRightIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { InfoItem } from "../../../../components/ui/InfoItem";
import StatusBadge from "../../../../components/ui/StatusBadge";
import { Button } from "../../../../components/ui/Button";
import type { TeamMember } from "../../../../types/projects";

export const TeamMemberTable = ({ members }: { members: TeamMember[] }) => (
    <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="px-6 py-4 font-bold">Name</th>
                    <th className="px-6 py-4 font-bold">Role</th>
                    <th className="px-6 py-4 font-bold">Tasks</th>
                    <th className="px-6 py-4 font-bold text-center">Status</th>
                    <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
                {members.map((member) => (
                    <tr key={member.id} className="group hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                            <InfoItem name={member.name} text={member.email} image={member.avatar} />
                        </td>
                        <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold border border-slate-200">
                                {member.role}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="text-sm">
                                <span className="font-bold text-slate-900">{member.tasks}</span>
                                <span className="text-slate-400 ml-1">({member.completedTasks} completed)</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <StatusBadge status={member.status} />
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-1">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    leftIcon={ChatBubbleLeftRightIcon}
                                    className="text-black"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    leftIcon={PencilSquareIcon}
                                    className="text-black"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    leftIcon={TrashIcon}
                                    className="text-red-600 hover:text-red-600 hover:bg-red-50"
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
