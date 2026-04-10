export type ProjectStatus = 'In Progress' | 'Progress' | 'Planning' | 'Completed' | 'On Hold';
export type ProjectPriority = 'High' | 'Medium' | 'Low'

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
}