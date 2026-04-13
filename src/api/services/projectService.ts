import axiosInstance from '../axiosInstance';
import type { Project, Activity, TimelineItem, Milestone, Attachment, FullProjectData, TeamMember, KanbanTask, KanbanColumnType } from '../../types/projects';

export const projectService = {
    getProjects: (): Promise<Project[]> => axiosInstance.get('/projects'),
    getProjectById: (projectId: string): Promise<Project> => axiosInstance.get(`/projects/${projectId}`),

    getTeamMembers: (projectId: string): Promise<TeamMember[]> =>
        axiosInstance.get<TeamMember[]>(`/teamMembers?projectId=${projectId}`),

    getKanbanColumns: (): Promise<KanbanColumnType[]> => axiosInstance.get<KanbanColumnType[]>('/kanbanColumns'),

    getKanbanTasks: (projectId: string): Promise<KanbanTask[]> =>
        axiosInstance.get<KanbanTask[]>(`/kanbanTasks?projectId=${projectId}`),

    getDiscussions: (projectId: string) =>
        axiosInstance.get(`/discussionData?projectId=${projectId}`),

    getFullProjectOverview: async (projectId: string): Promise<FullProjectData> => {
        const [project, activities, milestones, timelines, attachments] = await Promise.all([
            axiosInstance.get<Project>(`/projects/${projectId}`),
            axiosInstance.get<Activity[]>(`/activities?projectId=${projectId}`),
            axiosInstance.get<Milestone[]>(`/milestones?projectId=${projectId}`),
            axiosInstance.get<TimelineItem[]>(`/timelines?projectId=${projectId}`),
            axiosInstance.get<Attachment[]>(`/attachments?projectId=${projectId}`)
        ]);

        return {
            ...project,
            activities: activities || [],
            milestones: milestones || [],
            timelines: timelines || [],
            attachments: attachments || []
        } as unknown as FullProjectData;
    }
};