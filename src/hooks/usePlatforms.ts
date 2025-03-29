import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformsService from "../services/platforms-service";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, next: null, results: platforms },
  });

export default usePlatforms;
