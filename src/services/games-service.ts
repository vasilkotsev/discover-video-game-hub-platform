import APIClient from "./api-client";
import Game from "../entities/Game";

export default new APIClient<Game>("/games");
