import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import { MatchesList } from './components/matches/MatchesList/MatchesList';

const App = observer(() => {

  return (
    <div className='pb-4'>
      <Header />
      <div className="container">
        <MatchesList />
      </div>
    </div>
  );
})

export default App;
