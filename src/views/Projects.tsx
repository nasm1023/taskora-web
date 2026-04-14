import { ProjectDetailModal } from "../features/projects/components/ProjectDetailModal";
import { ProjectCard } from "../features/projects/ProjectCardGrid";
import { ProjectTable } from "../features/projects/ProjectTable";
import { ProjectToolbar } from "../features/projects/ProjectToolbar";
import { useProjectFilters } from "../hooks/useProjectFilter";
import { useProjects } from "../hooks/useProject";
import { LoadingState } from "../components/ui/LoadingState";
import { ErrorState } from "../components/ui/ErrorState";

export const ProjectsPage = () => {
  const { view, selectedProjectId, closeModal } = useProjectFilters();
  const {
    data: projects = [],
    isLoading,
    error,
    refetch
  } = useProjects();

  if (isLoading) return <LoadingState message="Đang tải danh sách dự án..." />;

  if (error) return <ErrorState message={error.message} onRetry={() => refetch()} />;

  const selectedProject = projects.find(p => p.id === selectedProjectId);
  return (
    <div>
      <ProjectToolbar />
      {view === 'grid' ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-6 px-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bg-white border rounded-xl">
          <ProjectTable projects={projects} />
        </div>
      )}
      <ProjectDetailModal
        project={selectedProject || null}
        isOpen={!!selectedProjectId}
        onClose={closeModal}
      />
    </div>
  );
};