import { InfoItem } from "../../../../components/ui/InfoItem";
import { Button } from "../../../../components/ui/Button";

export const TeamMemberList = ({ members }: { members: any[] }) => (
  <div className="space-y-3">
    {members.map(member => (
      <div key={member.id} className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100/50 hover:bg-slate-100 transition-colors">
        <InfoItem 
          name={member.name}
          text={member.role}
          image={member.avatar}
          variant="compact"
        />
        <Button variant="outline" size="sm" className="bg-white text-xs">View Profile</Button>
      </div>
    ))}
  </div>
);