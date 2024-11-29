import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponseObj } from "./useData";

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
    staleTime: 10 * 60 * 1000, //10min
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
