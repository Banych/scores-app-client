import { IMatch } from './IMatch';
import { IMatchHead2Head } from './IMatchHead2Head';

export interface IMatchResult {
  head2head: IMatchHead2Head;
  match: IMatch;
}