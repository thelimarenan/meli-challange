import useSWR from 'swr';
import { useRouter } from 'next/router';

import api from '../services/api';
import { SeachAPI, SeachDetailAPI } from '../services/SearchApi';

type QueryParam = { id: string, search: string  };

const mountParam: (query: QueryParam) => string = (query) => {
  if (query.id) {
    return `/${query.id}`;
  }

  return `?q=${query.search}`;
}

const useSearch = <T = SeachAPI | SeachDetailAPI>() => {
  const { query } = useRouter();
  const param = mountParam(query as QueryParam);

  const { data, error, mutate } = useSWR<T>(`/items${param}`, async (url) => {
    const response = await api.get(url);
    return response.data;
  });

  return { data, error, mutate };
};

export default useSearch;
