import type { ProjectStatus } from "../types/projects";

interface TaskMock {
  id: number;
  name: string;
  status: ProjectStatus; 
  due: string;
  user: string;
}

export const PROJECT_OVERVIEW_DATA = {
  description: "This is a comprehensive project aimed at ui component library for design system. The project involves multiple phases including research, design, development, testing, and deployment.",
  goals: [
    "Create a comprehensive design system",
    "Implement responsive components",
    "Ensure accessibility compliance",
    "Develop documentation"
  ],
  deliverables: [
    "Component library",
    "Style guide",
    "Implementation examples",
    "Technical documentation"
  ],
  activities: [
    { id: 1, user: "Jessica Chen", action: "updated the design files", time: "Today at 10:30 AM", avatar: "https://i.pravatar.cc/150?u=jessica" },
    { id: 2, user: "Alex Morgan", action: "completed 3 tasks", time: "Yesterday at 4:15 PM", avatar: "https://i.pravatar.cc/150?u=alex" },
    { id: 3, user: "Ryan Park", action: "added new comments", time: "Yesterday at 2:30 PM", avatar: "https://i.pravatar.cc/150?u=ryan" }
  ],
  milestones: [
    { id: 1, title: "Design System Components", due: "Due in 3 days", color: "text-blue-600 bg-blue-100", icon: 'calendar' },
    { id: 2, title: "User Testing", due: "Due in 1 week", color: "text-yellow-600 bg-yellow-100", icon: 'test' },
    { id: 3, title: "Documentation", due: "Due in 2 weeks", color: "text-green-600 bg-green-100", icon: 'doc' }
  ]
};

export const MOCK_TASKS: TaskMock[] = [
  { id: 1, name: 'Implement responsive design', status: 'In Progress', due: '3 days', user: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Test accessibility features', status: 'Planning', due: 'Tomorrow', user: 'https://i.pravatar.cc/150?u=2' }, // Planning tương ứng màu xanh blue
  { id: 3, name: 'Update documentation', status: 'Completed', due: '3 days', user: 'https://i.pravatar.cc/150?u=3' },
];