import React, { useContext, useEffect } from 'react';
import './App.css';
import { MatchesContext } from './stores/Matches/Matches.context';

const App = () => {
  const context = useContext(MatchesContext)
  useEffect(() => {
    context?.loadMatches();
  }, [ context ])
  return (
    <div className="App">
      <header className="App-header">
        Home page
      </header>
      <main>
        <ul>
          {[ ...context?.matches?.values() || [] ].map(match => (
            <li key={match.id} value={match.id}>{match.homeTeam.name} - {match.awayTeam.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
