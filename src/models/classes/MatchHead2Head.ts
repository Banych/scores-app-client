import { DTOable } from '../interfaces/DTOable';
import { Head2HeadTeamStats, IMatchHead2Head } from '../interfaces/IMatchHead2Head';

export class MatchHead2Head implements DTOable<IMatchHead2Head, MatchHead2Head> {
  awayTeam: Head2HeadTeamStats;
  homeTeam: Head2HeadTeamStats;
  numberOfMatches: number;
  totalGoals: number;

  constructor(dto: IMatchHead2Head) {
    this.awayTeam = dto.awayTeam;
    this.homeTeam = dto.homeTeam;
    this.numberOfMatches = dto.numberOfMatches;
    this.totalGoals = dto.totalGoals;
  }

  toDTO(): IMatchHead2Head {
    return { ...this }
  }
  toModel(dto: IMatchHead2Head): MatchHead2Head {
    throw new MatchHead2Head(dto);
  }

}