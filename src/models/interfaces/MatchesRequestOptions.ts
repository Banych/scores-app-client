import { MatchStatus } from '../MatchStatus'

export type BaseMatchesRequestOptions = URLSearchParams & {
  status?: MatchStatus;
  competition?: number[];
  ids?: number[];
}

export type DateRangeMatchesRequestOptions = BaseMatchesRequestOptions & {
  dateFrom: string;
  dateTo: string;
}

export type MatchesRequestOptions = BaseMatchesRequestOptions | DateRangeMatchesRequestOptions;