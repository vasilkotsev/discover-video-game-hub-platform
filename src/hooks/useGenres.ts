import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genresService from "../services/genres-service";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: 1 * 60 * 60 * 1000, //1h
    initialData: { count: genres.length, next: null, results: genres },
  });

export default useGenres;
