import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import platformsService from "../services/platforms-service";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
