import type { CompetitionType } from '../CompetitionType';
import type { IArea } from './IArea';

export interface ICompetition {
  id: number;
  name: string;
  code: string;
  type: CompetitionType;
  emblem: string;
  area?: IArea;
}
