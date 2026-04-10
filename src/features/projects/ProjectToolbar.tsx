import { Squares2X2Icon, ListBulletIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useProjectFilters } from '../../hooks/useProjectFilter';
import { Button } from '../../components/ui/Button';
import { SearchInput } from '../../components/shared/SearchInput';
import { cn } from '../../utils/cn';
import { Menu, MenuButton } from '@headlessui/react';


export const ProjectToolbar = () => {
  const { view, updateFilters } = useProjectFilters();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-2 border border-slate-100 shadow-sm">
      <div className="flex items-center gap-3 flex-1 w-full">
        <SearchInput />
        <Menu>
          <MenuButton>
            <Button variant="outline" size="sm" leftIcon={FunnelIcon} className="hidden lg:flex">
            All Projects
            </Button>
          </MenuButton>
        </Menu>
      </div>

      <div className="flex items-center gap-1 p-1 bg-slate-50 rounded-lg border border-slate-100">
        <Button
          variant={view === 'grid' ? 'primary' : 'ghost'} 
          size="sm"
          onClick={() => updateFilters({ view: 'grid' })}
          className={cn(
            "h-8 px-3", 
            view === 'grid' ? "bg-white text-black shadow-sm hover:bg-white" : "text-slate-400"
          )}
        >
          <Squares2X2Icon className="w-5 h-5" /> Gird
        </Button>

        <Button
          variant={view === 'list' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => updateFilters({ view: 'list' })}
          className={cn(
            "h-8 px-3",
            view === 'list' ? "bg-white text-black shadow-sm hover:bg-white" : "text-slate-400"
          )}
        >
          <ListBulletIcon className="w-5 h-5" /> List
        </Button>
      </div>
    </div>
  );
};
