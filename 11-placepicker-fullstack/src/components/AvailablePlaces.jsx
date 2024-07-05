import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      const res = await fetch('http://localhost:3000/places');
      const resData = await res.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

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
