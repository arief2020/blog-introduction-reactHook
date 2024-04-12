import React, { useCallback, useState } from 'react';
import ItemComponent from './ItemComponent';

export default function ItemListComponent() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const deleteItem = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => item !== id));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ItemComponent key={item} id={item} onDelete={deleteItem} />
      ))}
    </div>
  );
}
