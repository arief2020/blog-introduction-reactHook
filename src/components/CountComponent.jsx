import React, { useEffect, useState } from 'react';

export default function CountComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 2 === 0) {
      console.log('UseEffect invoked');
    }
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <p>Count: {count}</p>
      <p>Even Count: {count % 2 === 0 ? count : count - 1}</p>
    </div>
  );
}
