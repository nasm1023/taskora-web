import { InfoItem } from "../../../components/ui/InfoItem";
import { MOCK_PROJECTS } from "../../../data/mockProject";
import { useProjectFilters } from "../../../hooks/useProjectFilter";

export const ProjectDiscussion = () => {
  const { selectedProjectId } = useProjectFilters();
  const project = MOCK_PROJECTS.find((p) => p.id === selectedProjectId);

  if (!project) {
    return (
        <p>Không có dữ liệu thảo luận.</p>
    );
  }

  const discussions = project.discussions || [];

  return (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Project Discussions</h3>
        <p className="text-slate-400 text-sm  mb-16">Conversations and comments</p>
      </div>

      <div className="space-y-8">
        {project.discussions?.map((comment, index) => (
          <div key={comment.id} className="space-y-6">
            <InfoItem
              name={comment.name}
              image={comment.image}
              time={comment.time}
              text={comment.text}
              variant="compact"
            />

            {comment.replies && (
              <div className="pl-12 space-y-6">
                {comment.replies.map((reply) => (
                  <InfoItem
                    key={reply.id}
                    name={reply.name}
                    image={reply.image}
                    time={reply.time}
                    text={reply.text}
                    variant="compact"
                  />
                ))}
              </div>
            )}

            {index < discussions.length - 1 && (
              <hr className="border-slate-100 mt-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};