import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import type { KanbanColumnType, KanbanTask } from "../types/projects";
import type { AppError } from "../types/error";
import { projectService } from "../api/services/projectService";

export const useProjectTasks = (projectId: string) => {
    const [tasks, setTasks] = useState<KanbanTask[]>([]);
    const [columns, setColumns] = useState<KanbanColumnType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AppError | null>(null);

    const fetchKanbanData = useCallback(async () => {
        if (!projectId) return;
        try {
            setLoading(true);
            setError(null);
            // Gọi song song để tối ưu tốc độ
            const [colsData, tasksData] = await Promise.all([
                projectService.getKanbanColumns(),
                projectService.getKanbanTasks(projectId)
            ]);
            setColumns(colsData);
            setTasks(tasksData);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError({ message: err.response?.data?.message || "Lỗi tải bảng Kanban" });
            } else {
                setError({ message: "Lỗi hệ thống khi tải Tasks" });
            }
        } finally {
            setLoading(false);
        }
    }, [projectId]);

    useEffect(() => {
        fetchKanbanData();
    }, [fetchKanbanData]);

    return { tasks, columns, loading, error, refetch: fetchKanbanData };
};