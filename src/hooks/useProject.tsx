import { useState, useEffect, useCallback } from "react";
import { projectService } from "../api/services/projectService";
import type { Project } from "../types/projects";
import type { AppError } from "../types/error";
import axios from "axios";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AppError | null>(null);

    const fetchProjects = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await projectService.getProjects();
            setProjects(data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError({
                    message: err.response?.data?.message || err.message || "Lỗi kết nối Server",
                    status: err.response?.status,
                    code: err.code
                });
            } else {
                setError({
                    message: err instanceof Error ? err.message : "Đã có lỗi xảy ra"
                });
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, []);

    return { projects, loading, error, refetch: fetchProjects };
};