import type { IMatch } from './IMatch';

export interface IMatchResult {
  count: number;
  filter: any;
  matches: IMatch[];
}
