import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { useMatchesContext } from '../../../stores/Matches/Matches.context';
import MatchItem from '../MatchItem/MatchItem';

export const MatchesList = observer(() => {
  const context = useMatchesContext();

  useEffect(() => {
    context?.loadMatches();
  }, [ context ])

  return (
    <div>
      <h4>Matches ladder</h4>
      <table className='table table-borderless table-hover table-striped'>
        <tbody>
          {context?.matchesArray.map(match => (
            <MatchItem key={match.id} item={match} />
          ))}
        </tbody>
      </table>
    </div>
  )
})