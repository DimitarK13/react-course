import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';
import React from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => dispatch(counterActions.decrement())}>-</button>
        <button onClick={() => dispatch(counterActions.increase(5))}>+5</button>
        <button onClick={() => dispatch(counterActions.increment())}>+</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
