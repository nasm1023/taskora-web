import { Attachments } from "./Attachments";
import { Description } from "./Description";
import { SidebarDetails } from "./Sidebar";
import { Timeline } from "./Timeline";
import { ActivitySection } from "./Activity";
import { MileStone } from "./MileStone";
import { LoadingState } from "../../../../components/ui/LoadingState";
import { useProjectOverview } from "../../../../hooks/useProjectOverview";
import { ErrorState } from "../../../../components/ui/ErrorState";

interface ProjectOverviewProps {
  variant?: 'modal' | 'full';
  projectId: string;
}

export const ProjectOverview = ({ variant = 'modal', projectId }: ProjectOverviewProps) => {
  const { data, loading, error, refetch } = useProjectOverview(projectId);

  if (loading) return <LoadingState message="Đang tải thông tin dự án..." />;

  if (error) return <ErrorState message={error.message} onRetry={refetch} />;

  if (!data) return <div className="p-8 text-center">Không tìm thấy dữ liệu dự án!</div>;

  if (variant === 'modal') {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Description description={data.description} goals={data.goals} deliverables={data.deliverables} />
        <div className="grid grid-cols-2 gap-6">
          <ActivitySection activities={data.activities || []} variant={variant} />
          <MileStone milestones={data.milestones || []} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-500 text-left">
      <div className="lg:col-span-2 space-y-6">
        <Description description={data.description} goals={data.goals} deliverables={data.deliverables} />
        <Timeline timelines={data.timelines} />
      </div>

      <div className="space-y-6">
        <SidebarDetails details={data.details} />
        <ActivitySection variant={variant} showViewAll={true} activities={data.activities || []} />
        <Attachments files={data.attachments} />
      </div>
    </div>
  );
};
