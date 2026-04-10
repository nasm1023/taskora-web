import { 
  HomeIcon, 
  FolderIcon, 
  ClipboardDocumentCheckIcon, 
  Squares2X2Icon, 
  CalendarIcon, 
  UserGroupIcon, 
  BellIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline';

export const MAIN_MENU = [
  { id: 'home', label: 'Home', icon: HomeIcon , to: "/dsadas"},
  { id: 'projects', label: 'Projects', icon: FolderIcon , to: "/"},
  { id: 'tasks', label: 'My Tasks', icon: ClipboardDocumentCheckIcon , to: "/dsada"},
  { id: 'kanban', label: 'Kanban desk', icon: Squares2X2Icon , to: "/dsada"},
  { id: 'calendar', label: 'Calendar', icon: CalendarIcon , to: "/dsd"},
  { id: 'contacts', label: 'Contacts', icon: UserGroupIcon , to: "/sadas"},
  { id: 'notifications', label: 'Notifications', icon: BellIcon , to: "/dsad"},
  { id: 'search', label: 'Search', icon: MagnifyingGlassIcon , to: "/dsad"},
];