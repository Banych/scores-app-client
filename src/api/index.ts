import axios, { type AxiosResponse } from 'axios';
import { IMatch } from '../models/interfaces/IMatch';
import type { IMatchResult } from '../models/interfaces/IMatchResult';

const API_token = 'd5fcdeb3c9944082b3105447ebca48b7';
const API_URL = 'http://api.football-data.org/v2';
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common[ 'X-Auth-Token' ] = API_token;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

export const Matches = {
  list: () =>
    requests.get<IMatchResult>('/matches').then((result) => result.matches),
  details: (id: string) => requests.get<IMatch>(`/matches/${id}`),
};
