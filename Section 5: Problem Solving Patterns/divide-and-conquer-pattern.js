// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183956?start=15#notes

// naive solution. O(n) time complexity. linear search.
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// refactor. log(n) time complexity. binary search.
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); // get middle element as starting point to search for value

    if (array[middle] < val) {
      // if middle element's value is less than inputted value...
      min = middle + 1; // ...set new min value to divide up inputted array and ignore values less than middle element's value
    } else if (array[middle] > val) {
      // if middle element's value is less than inputted value...
      min = middle - 1; // ...set new min value to divide up inputted array and ignore values less than middle element's value
    } else {
      return middle; // eventually return middle which would be the desired value
    }
  }
  return -1; // if none found, return -1
}
