import { format } from 'date-fns';

export const dateFormat = (
  date: Date,
  length: 'SHORT' | 'LONG' = 'SHORT'
): string => {
  switch (length) {
    case 'LONG':
      return format(date, 'll MMMM yyyy hh:mm');
    case 'SHORT':
      return format(date, 'd MMM yyyy');
  }
};
