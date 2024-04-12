import React, { useState } from 'react';

export default function StateComponent() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Nilai count: {count}</p>
      <button type="button" onClick={incrementCount}>
        Tambah Count
      </button>
    </div>
  );
}
