import { makeAutoObservable } from 'mobx';
import { Matches } from '../../api';
import { Match } from '../../models/classes/Match';
import { MatchWithStats } from '../../models/classes/MatchWithStats';

export class MatchesStore {
  elementsMap = new Map<number, Match>();

  get matchesArray() {
    return [ ...this.elementsMap.values() ]
  }

  constructor() {
    makeAutoObservable(this);
  }

  loadMatches = () => {
    Matches.list().then(result => {
      this.setElementsMap(new Map<number, Match>(result.map(
        match => ([ match.id, new Match(match) ])
      )))
    })
  }

  matchDetails = async (id: string): Promise<MatchWithStats> => {
    const match = await Matches.details(id);
    return new MatchWithStats(match);
  }

  setElementsMap = (map: Map<number, Match>) => {
    this.elementsMap = map;
  }
}