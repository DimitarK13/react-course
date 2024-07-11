import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok)
    throw json({ message: 'Could not load events!' }, { status: 500 });

  return response;
};
