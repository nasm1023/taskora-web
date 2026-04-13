import { PROJECT_OVERVIEW_DATA } from "../../../../data/mockProjectDetail";

export const Description = () => (
    <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-1">Project Description</h3>
        <p className="text-slate-400 text-sm mb-8">Detailed information about the project</p>
        <p className="text-slate-600 leading-relaxed mb-8">{PROJECT_OVERVIEW_DATA.description}</p>
        <div className="grid grid-cols-2 gap-8">
            <div>
                <h4 className="text-slate-400 text-sm mb-4">Project Goals</h4>
                <ul className="space-y-3">
                    {PROJECT_OVERVIEW_DATA.goals.map((goal, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" /> {goal}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-slate-400 text-sm mb-4">Key Deliverables</h4>
                <ul className="space-y-3">
                    {PROJECT_OVERVIEW_DATA.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);