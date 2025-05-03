import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponseObj<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c8764c8f237460fa303c6c87d4f28f6",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (configObject?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponseObj<T>>(this.endpoint, configObject)
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
