import type { DTOable } from '../interfaces/DTOable';
import type { IArea } from '../interfaces/IArea';
import type { ICompetition } from '../interfaces/ICompetition';
import type { IMatch } from '../interfaces/IMatch';
import type { ISeason } from '../interfaces/ISeason';
import type { ITeam } from '../interfaces/ITeam';
import type { MatchGroup } from '../MatchGroup';
import type { MatchStage } from '../MatchStage';
import type { MatchStatus } from '../MatchStatus';
import { MatchScore } from './MatchScore';

export class Match implements DTOable<IMatch, Match> {
  id: number;
  area: IArea;
  competition: ICompetition;
  startDate: Date;
  status: MatchStatus;
  matchday: number;
  stage: MatchStage;
  group?: MatchGroup;
  lastUpdated: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
  venue: string;
  season?: ISeason;
  score: MatchScore;

  constructor(dto: IMatch) {
    this.id = dto.id;
    this.area = dto.area;
    this.competition = dto.competition;
    this.startDate = new Date(dto.utcDate);
    this.status = dto.status;
    this.matchday = dto.matchday;
    this.stage = dto.stage;
    this.lastUpdated = dto.lastUpdated;
    this.homeTeam = dto.homeTeam;
    this.awayTeam = dto.awayTeam;
    this.venue = dto.venue;
    this.season = dto.season;
    this.score = new MatchScore(dto.score);
  }

  toDTO(): IMatch {
    return {
      ...this,
      utcDate: this.startDate.toUTCString(),
    };
  }

  toModel(dto: IMatch): Match {
    return new Match(dto);
  }
}
