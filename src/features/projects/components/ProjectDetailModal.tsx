import { Dialog, Transition, DialogPanel, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon, CalendarIcon, ArrowTopRightOnSquareIcon, ClockIcon } from '@heroicons/react/24/outline';
import type { Project } from '../../../types/projects';
import StatusBadge from '../../../components/ui/StatusBadge';
import { AvatarGroup } from '../../../components/ui/AvatarGroup';
import { InfoCard } from '../../../components/ui/InfoCard';
import { ProgressBar } from '../../../components/ui/ProgressBar';
import { Button } from '../../../components/ui/Button';
import { TabItem } from '../../../components/ui/TabItem';
import { TABS, type TabType } from '../../../types/tab';
import { ProjectOverview } from './overview';
import { ProjectAnalytics } from './ProjectAnalytics';
import { format } from 'date-fns';
import { useNavigate } from 'react-router';
import { ProjectTeam } from './team'; 
import { ProjectTasks } from './tasks';
import { ProjectDiscussion } from './discussions';

interface Props {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, isOpen, onClose }: Props) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const navigate = useNavigate();

  if (!project) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tasks':
        return <ProjectTasks projectId={project.id} />
      case 'team':
        return <ProjectTeam projectId={project.id} />
      case 'discussions':
        return <ProjectDiscussion projectId={project.id} />
      case 'analytics':
        return <ProjectAnalytics />
      default:
        return <ProjectOverview projectId={project.id} />;
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-5xl transform overflow-hidden rounded-3xl bg-white p-8 shadow-2xl transition-all">
                {/* Close Button */}
                <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-slate-600">
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Header Section */}
                <div className="flex gap-6 mb-8 rounded-lg">
                  <div className="w-1.5 h-16 bg-yellow-400 rounded-full" />
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{project.name}</h2>
                    <p className="text-slate-500 mt-1">{project.description}</p>
                    <div className="flex gap-3 mt-4">
                      <StatusBadge status={project.status} />
                      <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider">
                        High Priority
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <InfoCard title="Progress" value={`${project.progress}%`} content={<ProgressBar progress={project.progress} />} />
                  <InfoCard title="Budget" value={project.budget} subValue={`Client: ${project.client}`} />
                  <InfoCard title="Team" content={<AvatarGroup users={project.members} size="md" max={5} />} subValue="3 team members" />
                  <InfoCard title="Dates" content={
                    <div className="text-sm space-y-1">
                      <div className="flex gap-2"><CalendarIcon className="w-4 h-4" /> Start: {project.startDate ? format(new Date(project.startDate), 'MMM d, yyyy') : 'N/A'}</div>
                      <div className="flex gap-2"><ClockIcon className="w-4 h-4" /> Deadline: {project.deadline ? format(new Date(project.deadline), 'MMM d, yyyy') : 'N/A'}</div>
                    </div>
                  } />
                </div>

                {/* Tabs */}
                <div className="w-full mt-8 mb-6 bg-slate-100 p-1 rounded-xl inline-flex gap-1">
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

                <div className="min-h-[300px]">
                  {renderTabContent()}
                </div>
                {/* Footer */}
                <div className="flex justify-end gap-3 mt-12">
                  <Button variant="outline" size="sm" onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    leftIcon={ArrowTopRightOnSquareIcon}
                    onClick={() => {
                      onClose();
                      navigate(`projects/${project.id}`)
                    }}
                    className='bg-black'
                  >
                    Open Full Project
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};