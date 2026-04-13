export const LoadingState = ({ message = "Đang tải dữ liệu..." }: { message?: string }) => (
    <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
        <p className="text-slate-500 font-medium animate-pulse">{message}</p>
    </div>
);