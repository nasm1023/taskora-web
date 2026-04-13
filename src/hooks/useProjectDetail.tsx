import { useState, useEffect, useCallback } from "react";
import { projectService } from "../api/services/projectService";
import type { Project } from "../types/projects";
import type { AppError } from "../types/error";
import axios from "axios";

export const useProjectDetail = (projectId: string | undefined) => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AppError | null>(null);

    const fetchDetail = useCallback(async () => {
        if (!projectId) return;

        try {
            setLoading(true);
            setError(null);
            const data = await projectService.getProjectById(projectId);
            setProject(data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError({
                    message: err.response?.data?.message || "Không thể tải chi tiết dự án",
                    status: err.response?.status,
                });
            } else {
                setError({ message: "Đã có lỗi xảy ra ngoài dự kiến" });
            }
        } finally {
            setLoading(false);
        }
    }, [projectId]);

    useEffect(() => {
        fetchDetail();
    }, [fetchDetail]);

    return { project, loading, error, refetch: fetchDetail };
};