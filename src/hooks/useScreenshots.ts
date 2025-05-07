import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import createScreenshotService from "../services/screenshots-service";

const useScreenshots = (gameId: number) => {
  const screenshotService = createScreenshotService(gameId);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: screenshotService.getAll,
    staleTime: ms("1h"),
  });
};

export default useScreenshots;
