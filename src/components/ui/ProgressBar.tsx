interface ProgressBarProps {
  progress: number;
  colorClass?: string;
  containerClass?: string;
}

export const ProgressBar = ({
  progress,
  colorClass = "bg-slate-900",
  containerClass = "h-2 bg-slate-100"
}: ProgressBarProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full rounded-full overflow-hidden ${containerClass}`}>
      <div
        className={`${colorClass} h-full transition-all duration-500 ease-out`}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};