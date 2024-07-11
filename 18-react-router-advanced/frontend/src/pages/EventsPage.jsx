import { Link, Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const EVENTS = [
  { id: 'p-01', title: 'Event 1' },
  { id: 'p-02', title: 'Event 2' },
  { id: 'p-03', title: 'Event 3' },
  { id: 'p-04', title: 'Event 4' },
  { id: 'p-05', title: 'Event 5' },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <Outlet />
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
