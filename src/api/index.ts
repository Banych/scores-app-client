import axios, { type AxiosResponse } from 'axios';
import type { IMatchesResult } from '../models/interfaces/IMatchesResult';
import { IMatchResult } from '../models/interfaces/IMatchResult';
import { MatchesRequestOptions } from '../models/interfaces/MatchesRequestOptions';

const API_token = 'd5fcdeb3c9944082b3105447ebca48b7';
const API_URL = 'http://api.football-data.org/v2';
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common[ 'X-Auth-Token' ] = API_token;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const urlSearchParams: URLSearchParams = new URLSearchParams();

const requests = {
  get: <T, O extends URLSearchParams>(url: string, options: O) => axios.get<T>(url, { params: { ...options } }).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

export const Matches = {
  list: (options: MatchesRequestOptions = urlSearchParams) =>
    requests.get<IMatchesResult, MatchesRequestOptions>('/matches', options).then((result) => result.matches),
  details: (id: string, options: URLSearchParams = urlSearchParams) => requests.get<IMatchResult, URLSearchParams>(`/matches/${id}`, options),
};
