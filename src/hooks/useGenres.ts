import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponseObj } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponseObj<Genre>>("/genres").then((res) => res.data),
    staleTime: 1 * 60 * 60 * 1000, //1h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
