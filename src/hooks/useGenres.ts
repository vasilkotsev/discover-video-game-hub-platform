import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genresService from "../services/genres-service";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });

export default useGenres;
