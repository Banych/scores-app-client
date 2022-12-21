import type { IMatch } from './IMatch';

export interface IMatchesResult {
  count: number;
  filter: any;
  matches: IMatch[];
}
