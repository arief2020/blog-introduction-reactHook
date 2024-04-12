import React, { useMemo, useState } from 'react';
import { combination, permutation } from '../utils/math';

export default function MemoComponent() {
  const [totalItems, setTotalItems] = useState(0);
  const [selectedItems, setSelectedItems] = useState(0);

  const permutationResult = useMemo(() => {
    console.log('Menghitung permutasi...');
    return permutation(totalItems, selectedItems);
  }, [totalItems, selectedItems]);

  const combinationResult = useMemo(() => {
    console.log('Menghitung kombinasi...');
    return combination(totalItems, selectedItems);
  }, [totalItems, selectedItems]);

  return (
    <div>
      <h1>Contoh Penggunaan useMemo di React</h1>
      <p>Masukkan jumlah total item:</p>
      <input
        type="number"
        value={totalItems}
        onChange={(e) => setTotalItems(parseInt(e.target.value, 10))}
      />
      <p>Masukkan jumlah item yang dipilih:</p>
      <input
        type="number"
        value={selectedItems}
        onChange={(e) => setSelectedItems(parseInt(e.target.value, 10))}
      />
      <p>Permutasi: {permutationResult}</p>
      <p>Kombinasi: {combinationResult}</p>
    </div>
  );
}
