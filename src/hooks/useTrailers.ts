import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import createTrailerService from "../services/trailer-service";

const useTrailers = (gameId: number) => {
  const trailerService = createTrailerService(gameId);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: trailerService.getAll,
    staleTime: ms("1h"),
  });
};

export default useTrailers;
