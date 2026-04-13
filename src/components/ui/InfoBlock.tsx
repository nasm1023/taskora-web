export const InfoBlock = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="text-left">
        <p className="text-[13px] text-slate-400 tracking-wider">{label}</p>
        <div className="text-sm text-slate-800">{value}</div>
    </div>
);