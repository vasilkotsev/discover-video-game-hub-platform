import APIClient from "./api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

export default new APIClient<Genre>("/genres");
