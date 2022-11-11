import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import './App.css';
import MatchItem from './components/matches/MatchItem/MatchItem';
import { useMatchesContext } from './stores/Matches/Matches.context';

const App = observer(() => {
  const context = useMatchesContext();

  useEffect(() => {
    context?.loadMatches();
  }, [ context ])

  return (
    <div className="container">
      <header className="App-header">
        Home page
      </header>
      <main>
        <ul>
          {context?.matchesArray.map(match => (
            <MatchItem key={match.id} item={match} />
          ))}
        </ul>
      </main>
    </div>
  );
})

export default App;
