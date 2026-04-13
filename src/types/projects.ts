import type { AvatarData } from "./avatar";

export type ProjectStatus = 'In Progress' | 'Progress' | 'Planning' | 'Completed' | 'On Hold';
export type ProjectPriority = 'High' | 'Medium' | 'Low' | 'High Priority'
export type TaskViewType = 'board' | 'list' | 'calendar';

export interface Project {
  id: string;
  name: string;
  description?: string;
  isStarred?: boolean;
  status: ProjectStatus;
  priority: ProjectPriority;
  progress: number;
  client?: string;
  budget?: number | string;
  startDate?: string | Date;
  deadline?: string;
  goals?: string[];
  deliverables?: string[];
  manager?: { name: string; avatar?: string };
  members: AvatarData[];
  tasksCount?: number;
  completedTasks?: number;
  activitiesCount?: number;

  details?: {
    client?: string;
    budget?: number | string;
    startDate?: string;
    deadline?: string;
    manager?: { name: string; avatar?: string };
  };
}

export interface FullProjectData extends Project {
  activities?: Activity[];
  milestones?: Milestone[];
  timelines?: TimelineItem[];
  attachments?: Attachment[];
}

export interface Activity {
  id: string | number;
  projectId?: string | number;
  user: string;
  action: string;
  time: string;
  avatar?: string;
}

export interface Milestone {
  id: string;
  projectId?: string;
  title: string;
  due: string;
  color: string;
  icon?: string;
}

export interface TimelineItem {
  id: string;
  projectId?: string;
  title: string;
  date: string;
  description?: string;
  status: 'completed' | 'current' | 'upcoming' | string;
}

export interface Attachment {
  id: string;
  projectId?: string;
  name: string;
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

export interface DiscussionComment {
  id: string;
  name: string;
  time: string;
  text: string;
  avatar: string;
}

export interface Thread {
  title: string;
  author: string;
  time: string;
  status: string;
  comments: DiscussionComment[];
}

export interface RecentDiscussion {
  id: string;
  title: string;
  author: string;
  time: string;
  status: 'Active' | 'Needs Input' | 'Resolved' | string;
  replies: number;
}

export interface DiscussionActivity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

export interface DiscussionData {
  activeThread: Thread;
  recent: RecentDiscussion[];
  teamActivity: DiscussionActivity[];
}