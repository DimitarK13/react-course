import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function EditEventPage() {
  const data = useRouteLoaderData('event');

  return <EventForm event={data.event} method='patch' />;
}
