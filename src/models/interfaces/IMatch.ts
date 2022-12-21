import type { MatchStatus } from '../MatchStatus';
import type { MatchStage } from '../MatchStage';
import type { MatchGroup } from '../MatchGroup';
import type { ITeam } from './ITeam';
import type { IArea } from './IArea';
import type { ICompetition } from './ICompetition';
import type { ISeason } from './ISeason';
import type { IScore } from './IScore';

export interface IMatch {
  id: number;
  area: IArea;
  competition: ICompetition;
  utcDate: string;
  status: MatchStatus;
  matchday: number;
  stage: MatchStage;
  group?: MatchGroup;
  lastUpdated: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
  venue: string;
  season?: ISeason;
  score: IScore;
}
