import type { AvatarData } from "./avatar";

export type ProjectStatus = 'In Progress' | 'Progress' | 'Planning' | 'Completed' | 'On Hold';
export type ProjectPriority = 'High' | 'Medium' | 'Low' | 'High Priority'
export type TaskViewType = 'board' | 'list' | 'calendar';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  deadline: string;
  progress: number;
  members: { name: string; src: string }[];
  tasksCount: number;
  activitiesCount: number;
  client: string;
  budget: string;
  startDate: string;
  priority?: ProjectPriority;
  isStarred?: boolean;
  budgetUsed: string;
  timeSpent: string;
  timeEstimate: string;
  discussions?: Comment[];
}

export interface Comment {
  id: string;
  name: string;
  image: string;
  time: string;
  text: string;
  replies?: Comment[];
}

export interface KanbanTask {
  id: string;
  columnId: string;
  category: string;
  title: string;
  priority: ProjectPriority;
  progress: number;
  date: string;
  attachments: number;
  comments: number;
  subtasks: string;
  members: AvatarData[];
}

export interface KanbanColumnType {
  id: string;
  title: string;
}

export interface TeamMember {
  id: number | string;
  name: string;
  email: string;
  role: string;
  tasks: number;
  completedTasks: number;
  status: 'Active' | 'Inactive';
  avatar: string;
}

export interface TaskMock {
  id: number;
  name: string;
  status: ProjectStatus;
  due: string;
  user: string;
}