import { useParams } from 'react-router-dom'
import { useMatch } from '../../../Hooks/UseMatch/UseMatch';

export const MatchView = () => {
  const { id } = useParams();
  const { match } = useMatch(id);

  return (
    <div>Match #{id}<br />{JSON.stringify(match)}</div>
  )
}