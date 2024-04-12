import React, { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button type="button" onClick={incrementCount}>
        Increment Count
      </button>
      <ChildComponent increment={incrementCount} />
    </div>
  );
}
