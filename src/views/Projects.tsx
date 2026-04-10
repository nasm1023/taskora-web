import { MOCK_PROJECTS } from "../data/mockProject";
import { ProjectCard } from "../features/projects/ProjectCardGrid";
import { ProjectDetailModal } from "../features/projects/ProjectDetailModal";
import { ProjectTable } from "../features/projects/ProjectTable";
import { ProjectToolbar } from "../features/projects/ProjectToolbar";
import { useProjectFilters } from "../hooks/useProjectFilter";

export const ProjectsPage = () => {
  const { view, selectedProjectId, closeModal } = useProjectFilters();
  const selectedProject = MOCK_PROJECTS.find(p => p.id === selectedProjectId);
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
          <ProjectTable projects={MOCK_PROJECTS}/>
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