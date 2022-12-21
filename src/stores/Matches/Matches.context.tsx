import React, { PropsWithChildren, createContext, useContext } from 'react'
import { MatchesStore } from './MatchesStore';

const MatchesContext = createContext<MatchesStore>(new MatchesStore());

export const useMatchesContext = () => useContext(MatchesContext)

export const MatchesProvider = (props: PropsWithChildren<unknown>) => {
  const store = new MatchesStore();

  return (
    <MatchesContext.Provider value={store} >
      {props.children}
    </MatchesContext.Provider>
  )
}