import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import genresService from "../services/genres-service";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
