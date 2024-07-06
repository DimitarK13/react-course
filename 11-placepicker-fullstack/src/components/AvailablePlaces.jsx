import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      try {
        const res = await fetch('http://localhost:3000/places');
        const resData = await res.json();

        if (!res.ok) throw new Error('Failed to fetch data');

        setAvailablePlaces(resData.places);
      } catch (err) {
        setError({ message: err.message || 'Could not fetch places!' });
      }
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title='An Error Occured' message={error.message} />;
  }

  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching data...'
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
