import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponseObj } from "../services/api-client";
import gamesService, { Game } from "../services/games-service";

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponseObj<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
