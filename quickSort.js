async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  await quickSort(arr, start, index-1);
  await quickSort(arr, index + 1, end); 
}

async function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if(arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++
    }
  }
  await swap(arr, pivotIndex, end);
  return pivotIndex;
}

async function swap (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}