import { useEffect, useState } from 'react'
import { MatchWithStats } from '../../models/classes/MatchWithStats';
import { useMatchesContext } from '../../stores/Matches/Matches.context'

export const useMatch = (id?: string) => {
  const { matchDetails } = useMatchesContext();
  const [ match, setMatch ] = useState<MatchWithStats>();

  useEffect(() => {
    if (id) {
      matchDetails(id).then(setMatch)
    }
  }, [ id, matchDetails ])

  return { match }
}