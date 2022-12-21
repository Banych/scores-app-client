export interface IMatchHead2Head {
  awayTeam: Head2HeadTeamStats;
  homeTeam: Head2HeadTeamStats;
  numberOfMatches: number;
  totalGoals: number;
}

export interface Head2HeadTeamStats {
  id: number;
  draws: number;
  losses: number;
  name: string;
  wins: number;
}