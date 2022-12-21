import type { IPeriodScore, IScore } from '../interfaces/IScore';
import type { ITeam } from '../interfaces/ITeam';

export class MatchScore implements IScore {
  duration: 'REGULAR' = 'REGULAR';
  extraTime: IPeriodScore;
  fullTime: IPeriodScore;
  halfTime: IPeriodScore;
  penalties: IPeriodScore;
  winner: ITeam;

  constructor(dto: IScore) {
    this.extraTime = dto.extraTime;
    this.fullTime = dto.fullTime;
    this.halfTime = dto.halfTime;
    this.penalties = dto.penalties;
    this.winner = dto.winner;
  }

  get fullTimeScore(): string | undefined {
    return Number.isInteger(this.fullTime.awayTeam) &&
      Number.isInteger(this.fullTime.homeTeam)
      ? `${this.fullTime.homeTeam} - ${this.fullTime.awayTeam}`
      : undefined;
  }
}
