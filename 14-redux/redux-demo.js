const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const data = store.getState();
  console.log(data);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
