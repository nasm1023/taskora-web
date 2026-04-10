import { useSearchParams } from 'react-router';

export type ViewMode = 'grid' | 'list';

export const useProjectFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const view = (searchParams.get('view') as ViewMode) || 'grid';

  const updateFilters = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'all') newParams.set(key, value);
      else newParams.delete(key);
    });
    setSearchParams(newParams, { replace: true });
  };

  return { view, updateFilters };
};