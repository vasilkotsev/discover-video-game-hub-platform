import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import gamesService, { Game } from "../services/games-service";

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => gamesService.get(slug),
    staleTime: ms("1h"),
  });

export default useGame;
