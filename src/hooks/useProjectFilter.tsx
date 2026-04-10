import { useSearchParams } from 'react-router-dom';

export const useProjectFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';
  const view = (searchParams.get('view') as 'grid' | 'list') || 'grid';
  const selectedProjectId = searchParams.get('modal'); 

  const updateParams = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });
    setSearchParams(newParams, { replace: true });
  };

  return {
    query,
    view,
    selectedProjectId,
    openModal: (id: string) => updateParams({ modal: id }),
    closeModal: () => updateParams({ modal: null }),
    setSearch: (q: string) => updateParams({ q }),
    setView: (v: 'grid' | 'list') => updateParams({ view: v }),
  };
};