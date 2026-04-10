import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const SearchInput = () => {
  return (
    <div className="relative flex-1 max-w-xs">
      <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none"
      />
    </div>
  );
};