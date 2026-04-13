import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { projectService } from "../api/services/projectService";
import type { FullProjectData } from "../types/projects";
import type { AppError } from "../types/error";

export const useProjectOverview = (projectId: string) => {
    const [data, setData] = useState<FullProjectData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AppError | null>(null);

    const fetchOverviewData = useCallback(async () => {
        if (!projectId) return;

        try {
            setLoading(true);
            setError(null);
            const result = await projectService.getFullProjectOverview(projectId);
            setData(result);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError({
                    message: err.response?.data?.message || "Lỗi tải thông tin tổng quan",
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
        fetchOverviewData();
    }, [fetchOverviewData]);

    return { data, loading, error, refetch: fetchOverviewData };
};