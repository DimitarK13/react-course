import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import NewEventPage from './pages/NewEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Homepage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          { path: '', element: <EventsPage /> },
          { path: ':id', element: <EventDetailPage /> },
          { path: ':id/edit', element: <EditEventPage /> },
          { path: 'new', element: <NewEventPage /> },
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
