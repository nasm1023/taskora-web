import React from 'react';

interface InfoCardProps {
  title: string;
  value?: string | number;
  subValue?: string;
  content?: React.ReactNode;
}

export const InfoCard = ({ title, value, subValue, content }: InfoCardProps) => {
  return (
    <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl transition-all hover:bg-white hover:shadow-sm">
      <p className="text-slate-400 text-sm mb-2">{title}</p>

      {value !== undefined && (
        <p className="text-2xl text-slate-900 font-bold leading-tight">
          {value}
        </p>
      )}

      {content && <div className="mt-3">{content}</div>}

      {subValue && (
        <p className="text-slate-400 text-xs mt-2">
          {subValue}
        </p>
      )}
    </div>
  );
};