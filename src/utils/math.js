export function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i+=1) {
    result *= i;
  }
  return result;
}

export function permutation(totalItems, selectedItems) {
  return factorial(totalItems) / factorial(totalItems - selectedItems);
}

export function combination(totalItems, selectedItems) {
  return (
    factorial(totalItems) /
    (factorial(selectedItems) * factorial(totalItems - selectedItems))
  );
}
