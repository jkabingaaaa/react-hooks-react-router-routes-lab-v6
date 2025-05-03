import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';

// Export the raw routes array for testing
export const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movie/:id',
    element: <Movie />
  },
  {
    path: '/directors',
    element: <Directors />
  },
  {
    path: '/actors',
    element: <Actors />
  }
];

// Export the configured router for the app
const router = createBrowserRouter(routes);
export default router;