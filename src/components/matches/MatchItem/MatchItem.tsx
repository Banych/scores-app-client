import React, { useMemo } from 'react';
import { Match } from '../../../models/classes/Match';
import { dateFormat } from '../../../utils/dateFormat';
import styled from 'styled-components'
import SmallAreaItem from '../../area/SmallAreaItem/SmallAreaItem';

export type MatchItemProps = {
  item: Match;
}

const Item = styled.li`
:nth-child(odd) {
  background-color: rgba(0,0,0,0.07)
}

:hover {
background-color: rgba(0,0,0,0.1);
}
`

const MatchItem = (props: MatchItemProps) => {
  const {
    item: {
      awayTeam: { name: awayTeamName },
      homeTeam: { name: homeTeamName },
      score: { fullTimeScore },
      startDate,
      competition: { area }
    }
  } = props;

  const formattedStartDate = useMemo(() =>
    dateFormat(startDate, 'SHORT')
    , [ startDate ]
  )

  return (
    <Item className='row'>
      {area && <div className="col-auto"><SmallAreaItem item={area} /></div>}
      <div className="col d-flex justify-content-end">{homeTeamName}</div>
      <div className="col-auto">{
        fullTimeScore ?? formattedStartDate
      }</div>
      <div className="col d-flex justify-content-start">{awayTeamName}</div>
    </Item>
  );
};

export default MatchItem;