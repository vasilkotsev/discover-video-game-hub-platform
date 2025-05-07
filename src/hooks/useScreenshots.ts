import { useQuery } from "@tanstack/react-query";
import createScreenshotService from "../services/screenshots-service";

const useScreenshots = (gameId: number) => {
  const screenshotService = createScreenshotService(gameId);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: screenshotService.getAll,
  });
};

export default useScreenshots;
