import type { KanbanColumnType, KanbanTask, TaskMock, TeamMember } from "../types/projects";

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
  ],
  details: {
    client: "Acme Inc.",
    budget: "$12,500",
    startDate: "Oct 1, 2023",
    deadline: "Nov 15, 2023",
    manager: { name: "Alex Morgan", avatar: "https://i.pravatar.cc/150?u=alex" }
  },
  timeline: [
    { id: 1, title: "Project Kickoff", date: "Oct 1, 2023", description: "Initial project setup, team assignment, and requirements gathering.", status: "completed" },
    { id: 2, title: "Design Phase Completed", date: "Oct 15, 2023", description: "Finalized wireframes, mockups, and design specifications.", status: "completed" },
    { id: 3, title: "Development Milestone", date: "Nov 5, 2023", description: "Core functionality implementation and initial testing.", status: "current" },
    { id: 4, title: "Project Completion", date: "Nov 15, 2023", description: "Final testing, documentation, and client handover.", status: "upcoming" }
  ],
  attachments: [
    { id: 1, name: "project-requirements.pdf" },
    { id: 2, name: "design-mockups.fig" },
    { id: 3, name: "project-timeline.xlsx" }
  ]
};

export const MOCK_TASKS: TaskMock[] = [
  { id: 1, name: 'Implement responsive design', status: 'In Progress', due: '3 days', user: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Test accessibility features', status: 'Planning', due: 'Tomorrow', user: 'https://i.pravatar.cc/150?u=2' }, // Planning tương ứng màu xanh blue
  { id: 3, name: 'Update documentation', status: 'Completed', due: '3 days', user: 'https://i.pravatar.cc/150?u=3' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@example.com",
    role: "Project Manager",
    tasks: 8,
    completedTasks: 5,
    status: "Active",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: 2,
    name: "Jessica Chen",
    email: "jessica@example.com",
    role: "UI/UX Designer",
    tasks: 12,
    completedTasks: 7,
    status: "Active",
    avatar: "https://i.pravatar.cc/150?u=jessica"
  },
];

export const KANBAN_DATA: { columns: KanbanColumnType[]; tasks: KanbanTask[] } = {
  columns: [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'in-review', title: 'In Review' },
    { id: 'done', title: 'Done' }
  ],
  tasks: [
    {
      id: 't1', columnId: 'todo', category: 'Website Redesign', title: 'Redesign landing page',
      priority: 'High', progress: 33, date: 'Jun 15', attachments: 2, comments: 5, subtasks: '1/3',
      members: [{ name: 'User 1', src: 'https://i.pravatar.cc/150?u=1' }, { name: 'User 2', src: 'https://i.pravatar.cc/150?u=2' }]
    },
    {
      id: 't2', columnId: 'in-progress', category: 'Bug Fixes', title: 'Fix navigation bug',
      priority: 'Medium', progress: 50, date: 'Jun 10', attachments: 3, comments: 0, subtasks: '2/4',
      members: [{ name: 'User 3', src: 'https://i.pravatar.cc/150?u=3' }]
    },
    {
      id: 't3', columnId: 'in-review', category: 'User Experience', title: 'Create user onboarding flow',
      priority: 'High', progress: 60, date: 'Jun 20', attachments: 5, comments: 8, subtasks: '3/5',
      members: [{ name: 'User 4', src: 'https://i.pravatar.cc/150?u=4' }, { name: 'User 5', src: 'https://i.pravatar.cc/150?u=5' }]
    },
    {
      id: 't4', columnId: 'done', category: 'Documentation', title: 'Update API documentation',
      priority: 'Low', progress: 100, date: 'Jun 5', attachments: 1, comments: 2, subtasks: '2/2',
      members: [{ name: 'User 6', src: 'https://i.pravatar.cc/150?u=6' }]
    }
  ]
};