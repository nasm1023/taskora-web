import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import type { DiscussionData } from "../types/projects";
import type { AppError } from "../types/error";
import { projectService } from "../api/services/projectService";

export const useProjectDiscussion = (projectId: string) => {
    const [data, setData] = useState<DiscussionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AppError | null>(null);

    const fetchDiscussions = async () => {
        if (!projectId) return;
        try {
            setLoading(true);
            setError(null);
            const res = await projectService.getDiscussions(projectId);
            const discussionData = Array.isArray(res) ? res[0] : res;
            setData(discussionData);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError({ message: "Không thể tải các cuộc thảo luận" });
            } else {
                setError({ message: "Lỗi dữ liệu Discussion" });
            }
        } finally {
            setLoading(false);
        }
    };

    const refetch = useCallback(fetchDiscussions, [projectId]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return { data, loading, error, refetch };
};