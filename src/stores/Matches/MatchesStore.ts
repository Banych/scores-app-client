import { makeAutoObservable } from 'mobx';
import api from '../../api';
import { Match } from '../../models/classes/Match';

export class MatchesStore {
  elementsMap = new Map<number, Match>();

  get matchesArray() {
    return [ ...this.elementsMap.values() ]
  }

  constructor() {
    makeAutoObservable(this);
  }

  loadMatches = () => {
    api.Matches.list().then(result => {
      this.setElementsMap(new Map<number, Match>(result.map(
        match => ([ match.id, new Match(match) ])
      )))
    })
  }

  setElementsMap = (map: Map<number, Match>) => {
    this.elementsMap = map;
  }
}