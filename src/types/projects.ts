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