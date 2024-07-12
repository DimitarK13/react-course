import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailPage, {
  loader as eventsDetailLoader,
} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import NewEventPage, { action as newEventAction } from './pages/NewEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '', element: <Homepage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            path: '',
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            id: 'event',
            loader: eventsDetailLoader,
            children: [
              {
                path: '',
                element: <EventDetailPage />,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
