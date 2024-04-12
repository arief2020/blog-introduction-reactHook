import React, { useRef } from 'react';

export default function FocusComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleClick}>
        Focus Input
      </button>
    </div>
  );
}
