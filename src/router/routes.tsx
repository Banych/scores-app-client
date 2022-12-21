import { RouteObject } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { MatchesView } from '../components/matches/MatchesView/MatchesView';
import { MatchView } from '../components/matches/MatchView/MatchView';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MatchesView />,
      },
      {
        path: 'matches/:id',
        element: <MatchView />
      }
    ]
  }
]