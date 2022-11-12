import React, { useMemo } from 'react';
import { IArea } from '../../../models/interfaces/IArea';

export type AreaItemProps = {
  item: IArea;
  size?: 'sm' | 'md' | 'lg';
}

const SmallAreaItem = (props: AreaItemProps) => {
  const {
    item: {
      ensignUrl,
      code
    },
    size = 'sm'
  } = props;


  const imgSize = useMemo(() => {
    switch (size) {
      case 'lg':
        return 100;
      case 'md':
        return 60;
      case 'sm':
        return 35;
      default:
        return 35;
    }
  }, [ size ])

  return (
    <img
      src={ensignUrl}
      alt={code}
      style={{ width: imgSize, maxHeight: imgSize }}
    />
  );
};

export default SmallAreaItem;