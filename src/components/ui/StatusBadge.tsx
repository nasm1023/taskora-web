import React from 'react';
import type { ProjectStatus } from '../../types/projects';

interface StatusBadgeProps {
  status: ProjectStatus;
  classname?: string;
}

const statusStyles: Record<string, string> = {
  'In Progress': 'bg-yellow-100 text-yellow-700',
  'Planning': 'bg-blue-100 text-blue-700',
  'Completed': 'bg-green-100 text-green-700',
  'On Hold': 'bg-gray-100 text-gray-700',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, classname = "" }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${classname} ${statusStyles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;