import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformsService from "../services/platforms-service";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 1 * 60 * 60 * 1000, //1h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
