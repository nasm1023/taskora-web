import { useState, useEffect } from "react";
import { projectService } from "../api/services/projectService";
import type { FullProjectData } from "../types/projects";
import type { AppError } from "../types/error";

export const useProjectOverview = (projectId: string) => {
    const [data, setData] = useState<FullProjectData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AppError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!projectId) return;
            try {
                setLoading(true);
                setError(null);
                const result = await projectService.getFullProjectOverview(projectId);
                setData(result);
            } catch (err) {
                console.log(err);

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [projectId]);

    return { data, loading, error };
};