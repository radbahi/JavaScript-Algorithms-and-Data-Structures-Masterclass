// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11071948#notes

function bubbleSort(arr) {
  // starts from front of array. undefined eventually gets compared to largest value.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    // starts from back of array. undefined never gets compared.
    let noSwaps = true; // included to not let loops go on forever
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

function bubbleSort(arr) {
  // uses ES2015 syntax
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
