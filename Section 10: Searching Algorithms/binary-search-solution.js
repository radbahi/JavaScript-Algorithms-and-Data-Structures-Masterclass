// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344132#notes

function binarySearch(arr, elem) {
  let start = 0; // initial starting point
  let end = array.length - 1; // initial ending point
  let middle = Math.floor((start + end) / 2); // initial middle point. Math.floor included to prevent a decimal number. The Math.floor() function returns the largest integer less than or equal to a given number.
  while (arr[middle] !== elem && start <= end) {
    // while the value we're looking for is not labeled middle, do below. && start <= end included to prevent infinite loop in case elem is NOT inside array.
    if (elem < arr[middle]) {
      // if elem we're looking for is less than current middle value...
      end = middle - 1; // ...make the new end the value just before the currently defined middle value...
    } else {
      // ...else make the new start value the one right after the currently defined middle value
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2); // get new middle value. will keep doing while loop until middle value eventually equals elem
  }
  if (arr[middle] === elem) {
    // if statement in case while loop breaks and elem is not inside array, we don't return an element that doesn't equal elem
    return middle;
  } else {
    return -1;
  }
}
