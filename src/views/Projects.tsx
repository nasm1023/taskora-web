import { ProjectCard } from "../features/projects/ProjectCardGrid";
import { ProjectToolbar } from "../features/projects/ProjectToolbar";
import { useProjectFilters } from "../hooks/useProjectFilter";
import type { Project } from "../types/projects";

const MOCK_PROJECTS: Project[] = [
  {
    id: 'PJ-001',
    name: 'Xây dựng Hệ thống E-Commerce',
    description: 'Phát triển nền tảng bán hàng trực tuyến tích hợp thanh toán đa kênh và quản lý kho vận.',
    status: 'In Progress',
    deadline: '2024-12-30',
    progress: 65,
    members: [
      { name: 'Lý Trường Nam', src: 'https://i.pravatar.cc/150?u=nam' },
      { name: 'Nguyễn Văn A', src: 'https://i.pravatar.cc/150?u=a' },
      { name: 'Trần Thị B', src: 'https://i.pravatar.cc/150?u=b' }
    ],
    tasksCount: 24,
    activitiesCount: 156,
    client: 'Tập đoàn ABC',
    budget: '$50,000',
    startDate: '2024-06-01',
    priority: 'High',
    isStarred: true
  },
  {
    id: 'PJ-002',
    name: 'Thiết kế UI/UX Mobile App',
    description: 'Thiết kế lại toàn bộ trải nghiệm.',
    status: 'Planning',
    deadline: '2024-11-15',
    progress: 15,
    members: [
      { name: 'Lê Văn C', src: 'https://i.pravatar.cc/150?u=c' },
      { name: 'Phạm Minh D', src: 'https://i.pravatar.cc/150?u=d' }
    ],
    tasksCount: 12,
    activitiesCount: 45,
    client: 'Fintech Startup',
    budget: '$15,000',
    startDate: '2024-10-20',
    priority: 'Medium',
    isStarred: false
  },
  {
    id: 'PJ-003',
    name: 'Nâng cấp Hạ tầng Cloud',
    description: 'Chuyển đổi hệ thống từ On-premise lên AWS để tối ưu hiệu suất và chi phí.',
    status: 'Completed',
    deadline: '2024-09-01',
    progress: 100,
    members: [
      { name: 'Hoàng Anh E', src: 'https://i.pravatar.cc/150?u=e' }
    ],
    tasksCount: 40,
    activitiesCount: 320,
    client: 'Global Logistics',
    budget: '$85,000',
    startDate: '2024-01-15',
    priority: 'Low',
    isStarred: true
  },
  {
    id: 'PJ-004',
    name: 'Chiến dịch Marketing Mùa Đông',
    description: 'Triển khai các chiến dịch quảng bá sản phẩm mới trên nền tảng mạng xã hội.',
    status: 'On Hold',
    deadline: '2024-12-10',
    progress: 40,
    members: [
      { name: 'Đặng Thu F', src: 'https://i.pravatar.cc/150?u=f' },
      { name: 'Ngô Gia G', src: 'https://i.pravatar.cc/150?u=g' },
      { name: 'Vũ Bảo H', src: 'https://i.pravatar.cc/150?u=h' }
    ],
    tasksCount: 18,
    activitiesCount: 89,
    client: 'Fashion Brand X',
    budget: '$20,000',
    startDate: '2024-08-05',
    priority: 'Medium',
    isStarred: false
  }
];

export const ProjectsPage = () => {
  const { view } = useProjectFilters();
  return (
    <div>
      <ProjectToolbar />
      {view === 'grid' ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-6 px-6">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bg-white border rounded-xl">
           <p className="p-10 text-center text-slate-500">List View is under construction...</p>
        </div>
      )}
    </div>
  );
};