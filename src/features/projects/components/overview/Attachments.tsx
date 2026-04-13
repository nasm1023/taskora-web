import { DocumentIcon, ArrowDownTrayIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../components/ui/Button";

interface AttachmentItem {
    id: string | number;
    name: string;
}

interface AttachmentsProps {
    files?: AttachmentItem[];
}

export const Attachments = ({ files = [] }: AttachmentsProps) => (
    <section className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Attachments</h3>
        <div className="space-y-3 mb-6">
            {files.map(file => (
                <div
                    key={file.id}
                    className="flex justify-between items-center p-3.5 bg-slate-50 rounded-2xl group hover:bg-slate-100 transition-all cursor-pointer border border-transparent hover:border-slate-200"
                >
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                            <DocumentIcon className="w-5 h-5 text-blue-500 shrink-0" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 truncate">{file.name}</span>
                    </div>
                    <ArrowDownTrayIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-900 shrink-0 transition-colors" />
                </div>
            ))}
        </div>
        <Button variant="outline" fullWidth leftIcon={PaperClipIcon} className="text-slate-600 border-dashed border-2">
            Add Attachment
        </Button>
    </section>
);