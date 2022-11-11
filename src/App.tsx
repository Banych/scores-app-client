import React, { useEffect, useState } from 'react';
import api from './api';
import './App.css';
import { Match } from './models/classes/Match';

const App = () => {
  const [ matches, setMatches ] = useState<Match[]>([])
  useEffect(() => {
    api.Matches.list().then(result => {
      const matches = result.map(match => new Match(match))
      setMatches(matches)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        Home page
      </header>
      <main>
        <ul>
          {matches.map(match => (
            <li key={match.id} value={match.id}>{match.homeTeam.name} - {match.awayTeam.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
