import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import type { TeamMember } from "../types/projects";
import type { AppError } from "../types/error";
import { projectService } from "../api/services/projectService";

export const useProjectTeam = (projectId: string) => {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AppError | null>(null);

    const fetchTeam = useCallback(async () => {
        if (!projectId) return;
        try {
            setLoading(true);
            setError(null);
            const data = await projectService.getTeamMembers(projectId);
            setMembers(data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError({
                    message: err.response?.data?.message || "Không thể tải danh sách thành viên",
                    status: err.response?.status,
                });
            } else {
                setError({ message: "Lỗi hệ thống không xác định" });
            }
        } finally {
            setLoading(false);
        }
    }, [projectId]);

    useEffect(() => {
        fetchTeam();
    }, [fetchTeam]);

    return { members, loading, error, refetch: fetchTeam };
};