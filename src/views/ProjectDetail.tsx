import { useParams } from "react-router-dom";
import { MOCK_PROJECTS } from "../data/mockProject";
import { InfoCard } from "../components/ui/InfoCard";
import { AvatarGroup } from "../components/ui/AvatarGroup";
import { ProgressBar } from "../components/ui/ProgressBar";
import { ProjectTitle } from "../features/projects/ProjectTitle";
import StatusBadge from "../components/ui/StatusBadge";
import { TABS, type TabType } from "../types/tab";
import { useState } from "react";
import { ProjectDiscussion } from "../features/projects/components/ProjectDiscussion";
import { ProjectAnalytics } from "../features/projects/components/ProjectAnalytics";
import { ProjectOverview } from "../features/projects/components/overview";
import { TabItem } from "../components/ui/TabItem";
import { ProjectTeam } from "../features/projects/components/team";
import { ProjectTasks } from "../features/projects/components/tasks";

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  const project = MOCK_PROJECTS.find((p) => p.id == projectId)
  if (!project) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tasks':
        return <ProjectTasks variant="full" />
      case 'team':
        return <ProjectTeam variant="full" />
      case 'discussions':
        return <ProjectDiscussion />
      case 'analytics':
        return <ProjectAnalytics />
      default:
        return <ProjectOverview variant="full" />;
    }
  };

  return (
    <div>
      <div className="flex gap-6 mb-8 rounded-lg px-8 py-2 text-left bg-white">
        <div className="w-full">
          <ProjectTitle
            name={project.name}
            isStarred={project.isStarred}
            description={project.description}
            status={project.status}
            deadline="Nov 15, 2023"
            startDate="Oct 1, 2023"
          >
            <StatusBadge status={project.status} />
            <StatusBadge status="High Priority" />
          </ProjectTitle>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            <InfoCard title="Progress" value={`${project.progress}%`} content={<ProgressBar progress={project.progress} />} />
            <InfoCard title="Budget" value={project.budget} subValue={`Client: ${project.client}`} />
            <InfoCard title="Team" content={<AvatarGroup users={project.members} size="md" max={5} />} subValue="3 team members" />
            <InfoCard title="Activity" value={project.activitiesCount} subValue="Last updated: Today" />
          </div>
        </div>
      </div>

      <div className="bg-slate-50 px-8">
        <div className="w-full mb-6 bg-slate-100 p-1 rounded-xl inline-flex gap-1">
          {TABS.map((tab) => (
            <TabItem
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};