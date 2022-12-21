import { DTOable } from '../interfaces/DTOable';
import { IMatchResult } from '../interfaces/IMatchResult';
import { Match } from './Match';
import { MatchHead2Head } from './MatchHead2Head';

export class MatchWithStats implements DTOable<IMatchResult, MatchWithStats> {
  head2head: MatchHead2Head;
  match: Match;

  constructor(dto: IMatchResult) {
    this.head2head = new MatchHead2Head(dto.head2head);
    this.match = new Match(dto.match);
  }

  toDTO(): IMatchResult {
    throw new Error('Method not implemented.');
  }
  toModel(dto: IMatchResult): MatchWithStats {
    throw new Error('Method not implemented.');
  }

}