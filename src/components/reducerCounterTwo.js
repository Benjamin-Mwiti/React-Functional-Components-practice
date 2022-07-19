import React, { useReducer } from 'react';

const initialState = {
  firstCount: 0,
  secondCount: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementFive':
      return { ...state, firstCount: state.firstCount + action.value };
    case 'decrementFive':
      return { ...state, firstCount: state.firstCount - action.value };
    case 'incrementTen':
      return { ...state, secondCount: state.secondCount + action.value };
    case 'decrementTen':
      return { ...state, secondCount: state.secondCount - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function ReducerCounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Reducer Counter Two</h2>
      <div>Count Five - {count.firstCount}</div>
      <div>Count Ten - {count.secondCount}</div>
      <button onClick={() => dispatch({ type: 'incrementFive', value: 5 })}>
        Increment Five
      </button>
      <button onClick={() => dispatch({ type: 'decrementFive', value: 5 })}>
        Decrement Five
      </button>
      <button onClick={() => dispatch({ type: 'incrementTen', value: 10 })}>
        Increment Ten
      </button>
      <button onClick={() => dispatch({ type: 'decrementTen', value: 10 })}>
        Decrement Ten
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ReducerCounterTwo;
