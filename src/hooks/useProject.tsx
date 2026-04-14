import { useQuery } from "@tanstack/react-query";
import { projectService } from "../api/services/projectService";
import type { Project } from "../types/projects";
import type { AppError } from "../types/error";

export const useProjects = () => {
    return useQuery<Project[], AppError>({
        queryKey: ["projects"],
        queryFn: projectService.getProjects,
        staleTime: 1000 * 60 * 5,
    });
};