import React, { useEffect, useRef } from 'react';

export default function AutoFocusComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />;
    </div>
  );
}
