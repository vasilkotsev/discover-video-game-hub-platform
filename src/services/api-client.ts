import axios from "axios";

export interface FetchResponseObj<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c8764c8f237460fa303c6c87d4f28f6",
  },
});
