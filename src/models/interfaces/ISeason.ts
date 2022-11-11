import { MatchStage } from '../MatchStage';
import type { ITeam } from './ITeam';

export interface ISeason {
  id: string;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: ITeam;
  stages: MatchStage[];
}
