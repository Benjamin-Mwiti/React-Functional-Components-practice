import React, { useState } from 'react';

function CounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + i);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={incrementFive}>Increment - 5</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default CounterTwo;
