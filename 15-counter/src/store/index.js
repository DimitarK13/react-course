import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.value,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   return state;
// };
