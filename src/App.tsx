import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header/Header';
import { MatchesProvider } from './stores/Matches/Matches.context';
import './App.css';

const App = (): ReactElement => {

  return (
    <MatchesProvider>
      <div className='pb-4'>
        <Header />
        <Outlet />
      </div>
    </MatchesProvider>
  );
}

export default App;
