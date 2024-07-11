import { json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
  const data = useLoaderData();

  const event = data.event;

  return <EventItem event={event} />;
}

export const loader = async ({ _, params }) => {
  const id = params.id;

  const res = await fetch(`http://localhost:8080/events/${id}`);

  if (!res.ok)
    throw json({ message: 'Could not fetch data for event' }, { status: 500 });

  return res;
};
