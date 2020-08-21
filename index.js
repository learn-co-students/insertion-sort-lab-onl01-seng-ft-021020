function findMinAndRemove(array) {
  let min = array[0];
  let index;
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= min) {
      min = array[i];
      index = i;
    }
  }

  array.splice(index, 1);
  return min;
}

function selectionSort(array) {
  const output = [];
  while (array.length) {
    let min = findMinAndRemove(array);
    output.push(min);
  }
  return output;
}
