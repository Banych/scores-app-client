import React, { PropsWithChildren, createContext } from 'react'
import { Optional } from '../../utils/Optional';
import { MatchStore } from './MatchStore';

export const MatchesContext = createContext<Optional<MatchStore>>(undefined);

export const MatchesProvider = (props: PropsWithChildren<unknown>) => {
  return (
    <MatchesContext.Provider value={new MatchStore()} >
      {props.children}
    </MatchesContext.Provider>
  )
}