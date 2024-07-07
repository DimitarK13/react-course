import { useState } from 'react';
import { useEffect } from 'react';

export default function Meals() {
  const [isFetching, setIsFetching] = useState();
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMeals() {
      try {
        setIsFetching(true);
        const res = await fetch('http://localhost:3000/meals');
        const resData = await res.json();

        if (!res.ok) throw new Error(`Couldn't fetch data...`);

        setMeals(resData);
        setIsFetching(false);
      } catch (err) {
        setError({ message: err.message || `Couldn't fetch data...` });
        setIsFetching(false);
      }
    }

    fetchMeals();
  }, []);

  return (
    <ul id='meals'>
      {isFetching && <p>Loading data...</p>}
      {meals.map((meal) => (
        <li className='meal-item' key={meal.id}>
          <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.title} />

            <div>
              <h3>{meal.name}</h3>
              <span className='meal-item-price'>{meal.price}</span>
              <p className='meal-item-description'>{meal.description}</p>
              <button className='button meal-item-actions'>Add to Cart</button>
            </div>
          </article>
        </li>
      ))}
      {error && <p>{error.message}</p>}
    </ul>
  );
}
