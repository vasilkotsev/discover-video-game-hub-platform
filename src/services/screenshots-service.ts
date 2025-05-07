import Screenshots from "../entities/Screenshot";
import APIClient from "./api-client";

export default (gameId: number) =>
  new APIClient<Screenshots>(`/games/${gameId}/screenshots`);
