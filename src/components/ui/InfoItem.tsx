interface InfoItemProps {
  name?: string;
  time?: string;
  text?: string;
  image: string;
  isUnread?: boolean;
}

export const InfoItem: React.FC<InfoItemProps> = ({ 
  name, 
  time, 
  text, 
  image, 
  isUnread = false 
}) => (
  <div className="flex items-start gap-3 cursor-pointer group">
    <div className="relative shrink-0">
      <img 
        src={image} 
        className="w-9 h-9 rounded-full object-cover border border-slate-100" 
        alt={name} 
      />
    </div>
    <div className="flex-1 min-w-0 text-left">
      <div className="flex justify-between items-baseline gap-2">
        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
          {name}
        </span>
        <span className="text-[10px] font-medium text-slate-400 shrink-0">
          {time}
        </span>
        {isUnread && (
        <span className="items-center w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full" />
      )}
      </div>
      <p className="text-[12px] text-slate-500 truncate leading-tight mt-0.5">
        {text}
      </p>

    </div>
  </div>
);