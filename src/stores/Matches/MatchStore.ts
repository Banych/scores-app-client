import { makeAutoObservable } from 'mobx';
import api from '../../api';
import { Match } from '../../models/classes/Match';

export class MatchStore {
  matches = new Map<number, Match>();

  get matchesArray() {
    return [ ...this.matches.values() ]
  }

  constructor() {
    makeAutoObservable(this);
  }

  loadMatches = () => {
    api.Matches.list().then(result =>
      this.matches = new Map<number, Match>(
        result.map(match => ([ match.id, new Match(match) ]))
      )
    )
  }
}