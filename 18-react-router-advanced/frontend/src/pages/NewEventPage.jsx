import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function NewEventPage() {
  return <EventForm />;
}

export const action = async ({ request, _ }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const res = await fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw json({ message: 'Could not save event' }, { status: 500 });

  return redirect('/events');
};
