import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import Error from './components/Error.jsx';

import { sortPlacesByDistance } from './loc.js';

async function updateUserPlaces(places) {
  const res = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await res.json();

  if (!res.ok) throw new Error('Failed to update user data');

  return resData.message;
}

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errUpdatingPlaces, setErrUpdatingPlaces] = useState();
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      try {
        const res = await fetch('http://localhost:3000/user-places');
        const resData = await res.json();

        if (!res.ok) throw new Error('Failed to fetch user data');

        navigator.geolocation.getCurrentPosition((pos) => {
          const sortedPlaces = sortPlacesByDistance(
            resData.places,
            pos.coords.latitude,
            pos.coords.longitude
          );

          setUserPlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (err) {
        setError({ message: err.message || 'Could not fetch places!' });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (err) {
      setUserPlaces(userPlaces);
      setErrUpdatingPlaces({
        message: err.message || 'Failed to update places.',
      });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (err) {
        setUserPlaces(userPlaces);
        setErrUpdatingPlaces({ message: err.message || 'Failed to delete!' });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleError() {
    setErrUpdatingPlaces(null);
  }

  return (
    <>
      <Modal open={errUpdatingPlaces} onClose={handleError}>
        {errUpdatingPlaces && (
          <Error
            title='An Error Occured'
            message={errUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt='Stylized globe' />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title='An Error Occured' message={error.message} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            isLoading={isFetching}
            loadingText='Fetching data...'
            fallbackText='Select the places you would like to visit below.'
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
