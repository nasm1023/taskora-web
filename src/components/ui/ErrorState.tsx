import { ExclamationTriangleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";

interface ErrorStateProps {
    title?: string;
    message: string;
    onRetry?: () => void;
}

export const ErrorState = ({
    title = "Đã có lỗi xảy ra",
    message,
    onRetry
}: ErrorStateProps) => (
    <div className="flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-slate-500 mt-2 mb-6 max-w-xs mx-auto">{message}</p>
        {onRetry && (
            <Button
                onClick={onRetry}
                variant="outline"
                leftIcon={ArrowPathIcon}
                className="gap-2"
            >
                Thử lại
            </Button>
        )}
    </div>
);