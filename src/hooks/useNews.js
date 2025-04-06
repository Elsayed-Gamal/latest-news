import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../api/fetchNews';
import { useState } from 'react';
import { useDebounce } from './useDebounce';

export function useNews() {
  const [query, setQuery] = useState('egypt');
  const [page, setPage] = useState(1);

  // Apply debouncing to the query
  const debouncedQuery = useDebounce(query, 600);

  const { data: news, isPending } = useQuery({
    queryKey: [`${debouncedQuery} news`],
    queryFn: () => fetchNews(debouncedQuery, page),
    enabled: debouncedQuery.length > 0,
  });

  return { query, setQuery, news, isPending, page, setPage };
}
