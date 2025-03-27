import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../api/fetchNews';
import { useState } from 'react';

export function useNews() {
  const [query, setQuery] = useState('egypt');
  const [page, setPage] = useState(1);

  const { data: news, isPending } = useQuery({
    queryKey: [`${query} news`],
    queryFn: () => fetchNews(query, page),
  });

  return { query, setQuery, news, isPending, page, setPage };
}
