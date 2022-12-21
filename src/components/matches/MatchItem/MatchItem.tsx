import React, { CSSProperties, useMemo } from 'react';
import { Match } from '../../../models/classes/Match';
import { dateFormat } from '../../../utils/dateFormat';
import styled from 'styled-components'
import SmallAreaItem from '../../area/SmallAreaItem/SmallAreaItem';
import { isToday } from 'date-fns'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export type MatchItemProps = {
  item: Match;
}

const StyledA: CSSProperties = {
  textDecoration: 'none',
  color: 'var(--bs - black)',
}

const MatchItem = (props: MatchItemProps) => {
  const {
    item: {
      id: matchId,
      awayTeam: { name: awayTeamName },
      homeTeam: { name: homeTeamName },
      score: { fullTimeScore },
      startDate,
      competition: { area, name: competitionName },
      status
    }
  } = props;

  const formattedStartDate = useMemo(() =>
    dateFormat(startDate, isToday(startDate) ? 'LONG' : 'SHORT')
    , [ startDate ]
  )

  const matchStatusColorClass = useMemo(() => {
    switch (status) {
      case 'FINISHED':
        return 'bg-light-gray';
      case 'SCHEDULED':
        return 'bg-light-orange';
      case 'IN_PLAY':
        return 'bg-light-green';
      default:
        return '';
    }
  }, [ status ])

  return (
    <tr className='' >
      {area && <td><div className=""><SmallAreaItem item={area} /></div></td>}
      <td><div className="">{competitionName}</div></td>
      <td className="text-end">{homeTeamName}</td>
      <td className={classNames(matchStatusColorClass, 'text-center', 'fw-bold')}>
        <Link to={`/matches/${matchId}`} style={StyledA}>
          {
            fullTimeScore ?? formattedStartDate
          }
        </Link>
      </td>
      <td className="text-start">{awayTeamName}</td>
    </tr>
  );
};

export default MatchItem;