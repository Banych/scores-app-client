import type { ITeam } from './ITeam';

export interface IScore {
  duration: 'REGULAR';
  extraTime: IPeriodScore;
  fullTime: IPeriodScore;
  halfTime: IPeriodScore;
  penalties: IPeriodScore;
  winner: ITeam;
}

export interface IPeriodScore {
  homeTeam: number;
  awayTeam: number;
}
