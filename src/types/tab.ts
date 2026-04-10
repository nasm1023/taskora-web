import { ChartBarIcon, ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/16/solid";
export type TabType = 'overview' | 'tasks' | 'team' | 'discussions' | 'analytics';

export const TABS: { id: TabType; label: string; icon: React.ComponentType<React.ComponentProps<'svg'>> }[] = [
  { id: 'overview', label: 'Overview', icon: DocumentTextIcon },
  { id: 'tasks', label: 'Tasks', icon: ClipboardDocumentListIcon },
  { id: 'team', label: 'Team', icon: UserGroupIcon },
  { id: 'discussions', label: 'Discussions', icon: ChatBubbleLeftRightIcon },
  { id: 'analytics', label: 'Analytics', icon: ChartBarIcon },
];