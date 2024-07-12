import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
  const data = useRouteLoaderData('event');

  const event = data.event;

  return <EventItem event={event} />;
}

export const loader = async ({ params }) => {
  const id = params.id;

  const res = await fetch(`http://localhost:8080/events/${id}`);

  if (!res.ok)
    throw json({ message: 'Could not fetch data for event' }, { status: 500 });

  return res;
};

export const action = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:8080/events/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok)
    throw json({ message: 'Could not delete event' }, { status: 500 });

  return redirect('/events');
};
