import axios, { AxiosResponse } from "axios";
const baseURL: string =
  "https://newsapi.org/v2/top-headlines?country=tr&apiKey=13df76a6d64547f5907f2ec159ecd04a";
export const getNewsFromApi = () => {
  return axios.get(baseURL).then((res: AxiosResponse) => res.data);
};
