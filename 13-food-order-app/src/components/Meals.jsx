import { useContext, useState } from 'react';
import { useEffect } from 'react';
import formatPrices from '../formatPrices';
import CartContext from '../store/CartContext';

export default function Meals() {
  const cartCtx = useContext(CartContext);

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

  function handleAddMeal(meal) {
    cartCtx.addItem(meal);
  }

  return (
    <ul id='meals'>
      {isFetching && <p>Loading data...</p>}
      {meals.map((meal) => (
        <li className='meal-item' key={meal.id}>
          <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.title} />

            <div>
              <h3>{meal.name}</h3>
              <span className='meal-item-price'>
                {formatPrices.format(meal.price)}
              </span>
              <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className='meal-item-actions'>
              <button onClick={() => handleAddMeal(meal)} className='button'>
                Add to Cart
              </button>
            </p>
          </article>
        </li>
      ))}
      {error && <p>{error.message}</p>}
    </ul>
  );
}
