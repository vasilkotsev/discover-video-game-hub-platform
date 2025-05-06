import Trailer from "../entities/Trailer";
import APIClient from "./api-client";

export default (gameId: number) =>
  new APIClient<Trailer>(`/games/${gameId}/movies`);
