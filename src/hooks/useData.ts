import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface FetchResponseObj<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfigObj?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const searchQuery = dependencies ? dependencies[0].searchText : null;
      let filterTimeout: any;

      const fetchingData = () => {
        setLoading(true);
        apiClient
          .get<FetchResponseObj<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfigObj,
          })
          .then((res) => {
            setData(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });
      };

      if (searchQuery?.length > 0) {
        filterTimeout = setTimeout(fetchingData, 600);
      } else fetchingData();

      return () => {
        controller.abort();
        clearTimeout(filterTimeout);
      };
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
